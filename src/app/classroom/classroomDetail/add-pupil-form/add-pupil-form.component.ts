import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Pupil} from "../../../types/pupil.model";

@Component({
  selector: 'app-add-pupil-form',
  templateUrl: './add-pupil-form.component.html',
  styleUrls: ['./add-pupil-form.component.css']
})
export class AddPupilFormComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AddPupilFormComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Pupil) { }

  ngOnInit() {
  }

}
