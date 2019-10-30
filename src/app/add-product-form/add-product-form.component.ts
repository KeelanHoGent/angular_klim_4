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
  constructor(
     private _fb: FormBuilder, 
     public dialogRef: MatDialogRef<AddProductFormComponent>,
     @Inject(MAT_DIALOG_DATA) private _data) {
       
     }

  ngOnInit() {
    this.product = this._fb.group({
      name: ['', Validators.required],
      image: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required]
    })
  }

  save() {
    this.dialogRef.close(this.product.value);
}

  close() {
    this.dialogRef.close();
}

}
