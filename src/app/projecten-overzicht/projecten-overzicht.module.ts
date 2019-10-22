import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectenContainerComponent } from './projecten-container/projecten-container.component';
import {MatCardModule} from "@angular/material/card";



@NgModule({
  declarations: [ProjectenContainerComponent],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [
    ProjectenContainerComponent
  ]
})
export class ProjectenOverzichtModule { }
