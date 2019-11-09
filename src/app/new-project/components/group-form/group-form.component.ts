import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
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
  public newGroup: Group;


  pupils: FormArray;
  

  constructor(private _fb: FormBuilder,
    public dialogRef: MatDialogRef<GroupFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {
      this.isEdit = data.soort;
  }

  ngOnInit() {
    this.group = this._fb.group({
      name: [this.data.name ? this.data.name : '', Validators.required],
      pupils: this._fb.array([ this.createPupil()])

    });
  }

  save(valid?: boolean) {
    console.log(valid);
    if (valid == true) {

      var group = new Group();
      group.name = this.group.value.name
      this.group.value.pupils.forEach(element => {
        group.pupils.push(new Pupil(element.firstName, ""))
      });
      
      console.log(group)
      console.log(this.group.value);
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

  addPupil(): void {
    this.pupils = this.group.get('pupils') as FormArray;
    this.pupils.push(this.createPupil());
  }


  createPupil(): FormGroup {
    return this._fb.group({
      firstName: '',
    });
  }

 
}
