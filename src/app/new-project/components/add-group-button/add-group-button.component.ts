import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Group } from 'src/app/types/group.model';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { GroupFormComponent } from '../group-form/group-form.component';
import { Pupil } from 'src/app/types/pupil.model';
import { ClassroomService } from 'src/app/services/classroom.service';

@Component({
  selector: 'app-add-group-button',
  templateUrl: './add-group-button.component.html',
  styleUrls: ['./add-group-button.component.css']
})
export class AddGroupButtonComponent {
  @Output() public newGroup = new EventEmitter<Group>();
  public group: Group;


  constructor(public dialog: MatDialog,
    private service: ClassroomService) { }

  addGroupForm(): void {
    const config = new MatDialogConfig();


    config.disableClose = true;
    config.width = "450px";
    config.autoFocus = true;
    config.data = {
      name: ""
    }

    const dialogRef = this.dialog.open(GroupFormComponent, config);

    this.group = new Group();

    dialogRef.afterClosed().subscribe(
      data => {
        if (data) {
          this.addGroup(data)
        }
      }
    );
  }

  addGroup(data: any): boolean {
    
    this.group.name = data.name
    let promise =  this.getPupil(data)

    promise.then(() => this.newGroup.emit(this.group))
    return false;

  }

  public getPupil(data: any) {
    return new Promise(
      (resolve) => {
        data.pupils.forEach((p: Pupil) => {
          this.service.getPupil(p.id)
            .toPromise()
            .then(
              pupil => {
              this.group.pupils.push(pupil)
              resolve()
            }
          )})
      })
  }
}
