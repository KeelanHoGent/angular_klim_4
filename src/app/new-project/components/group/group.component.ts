import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Group } from 'src/app/types/group.model';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { GroupFormComponent } from '../group-form/group-form.component';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent {
  @Input() public group: Group;
  @Output() public deletedgroup = new EventEmitter<Group>();
  constructor(public dialog: MatDialog) { }


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
      name: g.name
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
    this.group.name = data.name;
    this.group.pupils = data.pupils;
  }
}
