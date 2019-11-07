import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Group } from 'src/app/types/group.model';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { GroupFormComponent } from '../group-form/group-form.component';

@Component({
  selector: 'app-add-group-button',
  templateUrl: './add-group-button.component.html',
  styleUrls: ['./add-group-button.component.css']
})
export class AddGroupButtonComponent {
  @Output() public newGroup = new EventEmitter<Group>();
  public groep: Group;
  

  constructor(public dialog: MatDialog) { }
  
  addGroupForm(): void {
    const config = new MatDialogConfig();
    

    config.disableClose = true;
    config.width = "450px";
    config.autoFocus = true;
    config.data = {
      name: ""
    }

    const dialogRef = this.dialog.open(GroupFormComponent, config);

    this.groep = new Group();

    dialogRef.afterClosed().subscribe(
      data => {
        if(data){
          this.addGroup(data)
        }
      }
    );
  }

  addGroup(data: any): boolean {
    const group = new Group();
    group.name = data.name;
    this.newGroup.emit(group);
    return false;
  }
}
