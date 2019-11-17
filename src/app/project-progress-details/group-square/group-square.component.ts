import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Group } from 'src/app/types/group.model';

@Component({
  selector: 'app-group-square',
  templateUrl: './group-square.component.html',
  styleUrls: ['./group-square.component.css']
})
export class GroupSquareComponent implements OnInit {

  
  @Input() group: Group;
  @Output() public clickGroup = new EventEmitter<Group>();




  constructor() { }

  ngOnInit() {

  }


  detailsGroup(){

    this.clickGroup.emit(this.group);
  }
  

}
