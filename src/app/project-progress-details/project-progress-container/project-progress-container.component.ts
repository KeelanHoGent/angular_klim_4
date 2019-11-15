import { Component, OnInit } from '@angular/core';
import { Group } from 'src/app/types/group.model';
import { ProjectService } from 'src/app/services/project.service';
import { Project } from 'src/app/types/project.model';
import { Evaluation } from 'src/app/types/evaluation.model';

@Component({
  selector: 'app-project-progress-container',
  templateUrl: './project-progress-container.component.html',
  styleUrls: ['./project-progress-container.component.css']
})
export class ProjectProgressContainerComponent implements OnInit {

  public project : Project;

 
  selectedGroup : Group;

  constructor(private ps: ProjectService) { }

  ngOnInit() {
    this.ps.getProjectByIdForProgress$(1).subscribe(p => {
      this.project = p
      console.log(this.project );
      if(this.project.groups.length > 0){
        this.selectedGroup = this.project.groups[0];
        this.project.groups[0].showClicked = true;
      }
    })
  }


  refreshGroups(){
    this.ps.getProjectGroupsById(2).subscribe(ps => {    
      this.project.groups = ps
    });
  }

  detailsGroup(group: Group){
    this.project.changeShowClickedAllGroupsFalse();
    group.showClicked = true;
    this.selectedGroup = group;
  }

  detailsEvaluation(ev: Evaluation){
 
  }

}
