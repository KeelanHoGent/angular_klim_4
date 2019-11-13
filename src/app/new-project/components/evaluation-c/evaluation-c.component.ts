import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/types/product.model';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { AddProductFormComponent } from '../add-product-form/add-product-form.component';

@Component({
  selector: 'app-evaluation-c',
  templateUrl: './evaluation-c.component.html',
  styleUrls: ['./evaluation-c.component.css']
})
export class EvaluationCComponent {
  @Input() public product: Product;
  @Output() public deletedProduct = new EventEmitter<Product>();
  constructor(public dialog: MatDialog) { }


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
