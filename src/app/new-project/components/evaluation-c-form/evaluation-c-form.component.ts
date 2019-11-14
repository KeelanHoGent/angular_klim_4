import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { GroupFormComponent } from '../group-form/group-form.component';

@Component({
  selector: 'app-evaluation-c-form',
  templateUrl: './evaluation-c-form.component.html',
  styleUrls: ['./evaluation-c-form.component.css']
})
export class EvaluationCFormComponent implements OnInit {

  public form: FormGroup;
  public isEdit: boolean;

  constructor(private _fb: FormBuilder,
    public dialogRef: MatDialogRef<GroupFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {
      this.isEdit = data.soort;
  }

  ngOnInit() {
    this.form = this._fb.group({
      title: [this.data.title ? this.data.title : '', Validators.required]
    });
  }

  save(valid?: boolean) {
    if (valid == true) {
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
