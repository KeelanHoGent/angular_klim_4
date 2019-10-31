import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Product } from '../types/product.model';

@Component({
  selector: 'app-add-product-form',
  templateUrl: './add-product-form.component.html',
  styleUrls: ['./add-product-form.component.css']
})
export class AddProductFormComponent  {
  public product: FormGroup;
  public newProduct: Product;
  public isEdit: boolean;
  constructor(
     private _fb: FormBuilder, 
     public dialogRef: MatDialogRef<AddProductFormComponent>,
     @Inject(MAT_DIALOG_DATA) public data) {
       this.isEdit = data.soort;
     }

  ngOnInit() {
    this.product = this._fb.group({
      name: [this.data.name ? this.data.name : '', Validators.required],
      image: [this.data.image ? this.data.image : '', Validators.required],
      description: [this.data.description ? this.data.description : '', Validators.required],
      price: [this.data.price ? this.data.price : '', Validators.required]
    })
  }

  save() {
    console.log(this.product.value);
    this.dialogRef.close(this.product.value);
}

  close() {
    this.dialogRef.close();
}

}
