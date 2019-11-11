import { Component, OnInit, Input } from '@angular/core';
import { Group } from 'src/app/types/group.model';

@Component({
  selector: 'app-group-details-container',
  templateUrl: './group-details-container.component.html',
  styleUrls: ['./group-details-container.component.css']
})
export class GroupDetailsContainerComponent implements OnInit {
  @Input() group: Group;

  constructor() { }

  ngOnInit() {
    console.log(this.group);
  }

}
