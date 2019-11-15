import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from "@angular/material/card";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { SharedModule } from "../shared/shared.module";
import { MatButtonModule } from "@angular/material/button";
import { NewProjectModule } from "../new-project/new-project.module";
import { ProjectProgressContainerComponent } from './project-progress-container/project-progress-container.component';
import { HorizontalListGroupsComponent } from './horizontal-list-groups/horizontal-list-groups.component';
import { GroupSquareComponent } from './group-square/group-square.component';
import { GroupDetailsContainerComponent } from './group-details-container/group-details-container.component';
import { HorizontalListOrderItemsComponent } from './horizontal-list-order-items/horizontal-list-order-items.component';
import { OrderItemSquareComponent } from './order-item-square/order-item-square.component';
import { MatListModule , MatIconModule } from '@angular/material';
import { HorizontalListEvaluationsComponent } from './horizontal-list-evaluations/horizontal-list-evaluations.component';
import { EvaluationSquareComponent } from './evaluation-square/evaluation-square.component';
import { EvaluationFormComponent } from './evaluation-form/evaluation-form.component';


@NgModule({
  declarations: [
  ProjectProgressContainerComponent,
  HorizontalListGroupsComponent,
  GroupSquareComponent,
  GroupDetailsContainerComponent,
  HorizontalListOrderItemsComponent,  
  OrderItemSquareComponent, 
  HorizontalListEvaluationsComponent,
  EvaluationSquareComponent,
  EvaluationFormComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    SharedModule,
    MatButtonModule,
    NewProjectModule
  ],
  exports: [
    
  ]
})
export class ProjectProgressDetailsModule { }
