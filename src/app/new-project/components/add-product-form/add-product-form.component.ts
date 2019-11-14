import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Product } from '../../../types/product.model';

function validateName(control: FormGroup)
  : { [key: string]: any } {
  if (
    control.get('name').value.length < 2
  ) {
    return { name: true };
  }
  return null;
}

@Component({
  selector: 'app-add-product-form',
  templateUrl: './add-product-form.component.html',
  styleUrls: ['./add-product-form.component.css']
})
export class AddProductFormComponent {
  public error: String = "../../../../assets/images/error.svg";
  public correct: String = "../../../../assets/images/correct.svg";

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
    // },{
    //   // validator: validateName,validateImage, validateDescription, validatePrice
    });
  }

  save(valid?: boolean) {
    if (valid == true) {
      this.dialogRef.close(this.product.value);
    }
  }

  close() {
    this.dialogRef.close();
  }

  getErrorMessage(errors: any) {
    if (errors.required) {
      return 'Dit veld is verplicht.';
    }
  }

}
