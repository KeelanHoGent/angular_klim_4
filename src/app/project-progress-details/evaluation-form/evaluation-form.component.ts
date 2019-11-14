import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-evaluation-form',
  templateUrl: './evaluation-form.component.html',
  styleUrls: ['./evaluation-form.component.css']
})
export class EvaluationFormComponent implements OnInit {

  public form: FormGroup;
  public isEdit: boolean;

  constructor(private _fb: FormBuilder,
    public dialogRef: MatDialogRef<EvaluationFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {
      this.isEdit = data.soort;
  }

  ngOnInit() {
    this.form = this._fb.group({
      title: [{value: this.data.title ? this.data.title : '', disabled: !this.data.extra}, Validators.required],
      descriptionPrivate: [this.data.descriptionPrivate ? this.data.descriptionPrivate : '', Validators.required],
      descriptionPupil: [this.data.descriptionPupil ? this.data.descriptionPupil : '', Validators.required]
    });
  }

  save(valid?: boolean) {
    if (valid) {
      this.dialogRef.close(this.form.value);
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
