import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Pupil} from "../../../types/pupil.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-pupil-form',
  templateUrl: './add-pupil-form.component.html',
  styleUrls: ['./add-pupil-form.component.css']
})
export class AddPupilFormComponent implements OnInit {

  public error: String = "assets/images/error.svg";
  public correct: String = "assets/images/correct.svg";
  public pupilForm: FormGroup;

  constructor(private _fb: FormBuilder,
    public dialogRef: MatDialogRef<AddPupilFormComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Pupil) { }

  ngOnInit() {
    this.pupilForm = this._fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      surName: ['', [Validators.required, Validators.minLength(2)]]
    })
  }

  save(valid?: boolean) {
    if (valid) {
      this.dialogRef.close(this.pupilForm.value);
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
