import { Component, Output, EventEmitter } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { AddProductFormComponent } from '../add-product-form/add-product-form.component';
import { Product } from '../../../types/product.model';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})



export class AddProductComponent {
  @Output() public newProduct = new EventEmitter<Product>();
  public product: Product;
  

  constructor(public dialog: MatDialog) { }
  
  addProductForm(): void {
    const config = new MatDialogConfig();
    

    config.disableClose = true;
    config.width = "450px";
    config.autoFocus = true;
    config.data = {
      name: "",
      price: "",
      description: "",
      image: ""
    }

    const dialogRef = this.dialog.open(AddProductFormComponent, config);

    this.product = new Product();

    dialogRef.afterClosed().subscribe(
      data => {
        if(data){
          this.addProduct(data)
        }
      }
    );
  }

  addProduct(data: any): boolean {
    const product = new Product();
    product.name = data.name;
    product.description = data.description;
    product.image = data.image;
    product.price = data.price;
    this.newProduct.emit(product);
    return false;
  }



}
