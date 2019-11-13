import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/types/product.model';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { AddProductFormComponent } from '../add-product-form/add-product-form.component';

@Component({
  selector: 'app-evaluation-c-add-button',
  templateUrl: './evaluation-c-add-button.component.html',
  styleUrls: ['./evaluation-c-add-button.component.css']
})
export class EvaluationCAddButtonComponent  {
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
