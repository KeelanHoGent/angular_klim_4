import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectenContainerComponent } from './projecten-container/projecten-container.component';
import {MatCardModule} from "@angular/material/card";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatListModule} from "@angular/material/list";
import {MatTableModule} from "@angular/material/table";



@NgModule({
  declarations: [ProjectenContainerComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    ProjectenContainerComponent
  ]
})
export class ProjectenOverzichtModule { }
