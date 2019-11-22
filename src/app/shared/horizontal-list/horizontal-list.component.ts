import { Component, Input, OnInit } from '@angular/core';
import { Project } from "../../types/project.model";

@Component({
  selector: 'app-horizontal-list',
  templateUrl: './horizontal-list.component.html',
  styleUrls: ['./horizontal-list.component.css']
})
export class HorizontalListComponent implements OnInit {

  @Input() list: Project[];
  @Input() ListTitle: string;

  constructor() { }

  ngOnInit() {
  }

}
