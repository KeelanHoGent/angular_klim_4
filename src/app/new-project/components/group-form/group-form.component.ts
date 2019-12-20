import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { Group } from 'src/app/types/group.model';
import { Pupil } from 'src/app/types/pupil.model';

@Component({
  selector: 'app-group-form',
  templateUrl: './group-form.component.html',
  styleUrls: ['./group-form.component.css']
})
export class GroupFormComponent implements OnInit {
  public error: String = "../../../../assets/images/error.svg";
  public correct: String = "../../../../assets/images/correct.svg";
  public isEdit: boolean;
  public group: FormGroup;
  public pupilsInList: Pupil[];

  pupils: FormArray;


  constructor(private _fb: FormBuilder,
    public dialogRef: MatDialogRef<GroupFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {
    this.isEdit = data.soort;
  }

  ngOnInit() {
    this.group = this._fb.group({
      name: [this.data.name ? this.data.name : '', Validators.required],
      pupils: this._fb.array([

      ])
    });

    // if (!(this.data.pupils === undefined)) {
    //   const control = <FormArray>this.group.controls['pupils'];
    //   this.data.pupils.forEach((element: Pupil) => {
    //     control.push(this.createPupil(element))
    //   });
    // }

    if (!(this.data.pupils === undefined)){
      this.pupilsInList = this.data.pupils
    }
  }

  save(valid?: boolean) {
    if (valid) {
      this.dialogRef.close(this.group.value);
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

  addPupils(pupils: Pupil[]): void {

    const control = <FormArray>this.group.controls['pupils'];
    pupils.forEach(pu => control.push(this.createPupil(pu)) )

   

    //   this.data.pupils.forEach((element: Pupil) => {
    //     console.log("el:",element)
    //     event.forEach(pu => control.push(this.createPupil(pu)))
    //   })
  }

  addPupil(pupil: Pupil): void {
    const control = <FormArray>this.group.controls['pupils'];
    control.push(this.createPupil(pupil));
  }

  deletePupil(pupil: Pupil): void {
    const control = <FormArray>this.group.controls['pupils'];
    control.removeAt(control.value.findIndex(p => p.id === pupil.id))
    console.log(control);
  }


  createPupil(p: Pupil): FormGroup {
    return this._fb.group({
      id: p.id
    });
  }

  get formPupils() { return <FormArray>this.group.get('Data'); }
}
