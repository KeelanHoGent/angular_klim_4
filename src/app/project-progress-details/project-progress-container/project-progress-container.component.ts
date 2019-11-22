import { Component, OnInit } from '@angular/core';
import { Group } from 'src/app/types/group.model';
import { ProjectService } from 'src/app/services/project.service';
import { Project } from 'src/app/types/project.model';
import { Evaluation } from 'src/app/types/evaluation.model';
import { GroupService } from 'src/app/services/group.service';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { EvaluationFormComponent } from '../evaluation-form/evaluation-form.component';
import { ConfigPdfComponent } from '../config-pdf/config-pdf.component';
import { environment } from 'src/environments/environment';
import { PdfSettings } from 'src/app/types/customDTOs/PdfSettings.model';
import { ActivatedRoute } from '@angular/router';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-project-progress-container',
  templateUrl: './project-progress-container.component.html',
  styleUrls: ['./project-progress-container.component.css']
})
export class ProjectProgressContainerComponent implements OnInit {

  public project : Project;
  subscription: Subscription;

  

 
  selectedGroup : Group;

  constructor(private ps: ProjectService, private gs: GroupService, public dialog: MatDialog, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params.id)
      this.ps.getProjectByIdForProgress$(params.id).subscribe(p => {
        this.project = p
        if(this.project.groups.length > 0){
          this.selectedGroup = this.project.groups[0];
          this.project.groups[0].showClicked = true;
        }
         //refresh groups every 5
      const source = interval(5000);
      this.subscription = source.subscribe(val => this.refreshGroup());
      })
    });

   
   
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


  refreshGroup(){
    console.log("refresh")
    this.ps.getProjectGroupsById(this.project.id).subscribe(ps => {    
      this.project.groups = ps
      this.selectedGroup = this.project.groups.find(g => g.id === this.selectedGroup.id)
      this.selectedGroup.showClicked = true;
    });
  }

  detailsGroup(group: Group){
    this.project.changeShowClickedAllGroupsFalse();
    group.showClicked = true;
    this.selectedGroup = group;
  }


  addNewEvaluationToProject(g: Evaluation) {
    this.gs.addNewEvaluation(this.selectedGroup.id, g).subscribe(ev => {
      this.selectedGroup.addEvaluation(ev);
    }) 
  }

  detailsEvaluation(e : Evaluation){ // edited an evaluation


  this.gs.editEvaluation(this.selectedGroup.id, e.evaluationId, e).subscribe((ev : Evaluation) => {
      this.selectedGroup.setEvaluationAfterEdit(ev);
    }) 
  }

  deleteEvaluation(e: Evaluation){ // only availiable for extra evaluations
    this.gs.deleteEvaluation(this.selectedGroup.id, e.evaluationId).subscribe(g => {
      console.log(g);
      this.selectedGroup.removeEvaluationById(g.evaluationId);
    });
  }

  showEvaluationConfig(): void {

   

    const config = new MatDialogConfig();
    config.disableClose = false;
    config.width = "450px";
    config.autoFocus = true;
    config.data = {
      project: this.project
    }

    const dialogRef = this.dialog.open(ConfigPdfComponent, config);

    dialogRef.afterClosed().subscribe(
      data => {
        if(data){
          //this.addEvaluation(data)
        }
      }
    );
  }


}
