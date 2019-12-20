import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Group } from 'src/app/types/group.model';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { GroupFormComponent } from '../group-form/group-form.component';
import { Pupil } from 'src/app/types/pupil.model';
import { ClassroomService } from 'src/app/services/classroom.service';
import { Classroom } from 'src/app/types/classroom.model';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent {
  @Input() public group: Group;
  @Input() public classroom: Classroom;
  @Output() public deletedgroup = new EventEmitter<Group>();
  constructor(public dialog: MatDialog,
    private service: ClassroomService) {
      console.log("verder", this.classroom)
     }


  deleteGroup(): boolean {
    this.deletedgroup.emit(this.group);
    return false;
  }

  editGroupForm(g: Group): void {
    const config = new MatDialogConfig();

    config.disableClose = true;
    config.width = "450px";
    config.autoFocus = true;
    config.data = {
      soort: true,
      name: g.name,
      pupils: g.pupils,
      crId: this.classroom.id
    }

    const dialogRef = this.dialog.open(GroupFormComponent, config);

    dialogRef.afterClosed().subscribe(
      data => {
        
        if(data){
          this.updateGroup(data);
        } 
      }
    );
  }

  updateGroup(data: any){
    this.group.pupils = new Array<Pupil>();
    this.group.name = data.name;
    data.pupils.forEach(p => {
      this.getPupil(p.id);
    });
  }

  public getPupil(id: number) {
    return new Promise(
      (resolve) => {
        this.service.getPupil(id)
          .toPromise()
          .then(
            pupil => {
              this.group.pupils.push(pupil)
              resolve()
            }
          )
      })
  }
}
