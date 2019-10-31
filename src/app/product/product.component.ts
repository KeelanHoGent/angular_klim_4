import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../types/product.model';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { AddProductFormComponent } from '../add-product-form/add-product-form.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() public product: Product;
  @Output() public deletedProduct = new EventEmitter<Product>();
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  deleteProduct(): boolean {
    this.deletedProduct.emit(this.product);
    return false;
  }

  editProductForm(p: Product): void {
    const config = new MatDialogConfig();

    config.disableClose = true;
    config.width = "450px";
    config.autoFocus = true;
    config.data = {
      soort: true,
      name: p.name,
      price: p.price,
      description: p.description,
      image: p.image
    }


    const dialogRef = this.dialog.open(AddProductFormComponent, config);

    dialogRef.afterClosed().subscribe(
      data => {
        if(data){
          this.updateProduct(data);
        }
      }
    );
  }

  updateProduct(data: any){
    this.product.name = data.name;
    this.product.description = data.description;
    this.product.image = data.image;
    this.product.price = data.price;
  }

}
