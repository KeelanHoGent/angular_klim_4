import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Classroom} from "../../../types/classroom.model";
import {ClassroomService} from "../../../services/classroom.service";
import {Pupil} from "../../../types/pupil.model";
import {MatDialog} from "@angular/material/dialog";
import {AddPupilFormComponent} from "../add-pupil-form/add-pupil-form.component";

@Component({
  selector: 'app-classroom-detail',
  templateUrl: './classroom-detail.component.html',
  styleUrls: ['./classroom-detail.component.css']
})
export class ClassroomDetailComponent implements OnInit {

  public classroom: Classroom;
  public newPupil = new Pupil("", "");

  displayedColumns: String[] = ['firstName', 'surName'];
  dataSource: Pupil[]

  constructor(private route: ActivatedRoute, private classroomService: ClassroomService, private router: Router, public dialog: MatDialog) { }

  ngOnInit() {
    this.route.data.subscribe(item => this.classroom = item['classroom']);
    this.dataSource = this.classroom.pupils;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddPupilFormComponent, {
      width: '300px',
      data: {firstName: this.newPupil.firstName, surName: this.newPupil.surName}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result)
      {
        this.newPupil = new Pupil(result.firstName, result.surName);

        this.classroomService.addNewPupil(this.newPupil, this.classroom.id).subscribe(p => {
          this.classroom.addPupil(Pupil.fromJSON(p));
          console.log(this.classroom.pupils);
        });
      }

    });
  }



}
