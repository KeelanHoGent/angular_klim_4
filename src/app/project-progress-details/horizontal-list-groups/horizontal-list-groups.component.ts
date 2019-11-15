import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Group } from 'src/app/types/group.model';

@Component({
  selector: 'app-horizontal-list-groups',
  templateUrl: './horizontal-list-groups.component.html',
  styleUrls: ['./horizontal-list-groups.component.css']
})
export class HorizontalListGroupsComponent implements OnInit {

  @Input() list: Group[];
  @Input() ListTitle: string;
  @Output() public clickGroup = new EventEmitter<Group>();

  constructor() { }

  ngOnInit() {
  }

  detailsGroup(group: Group){
    this.clickGroup.emit(group);
  }

}
