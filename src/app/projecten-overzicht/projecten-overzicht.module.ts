import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectenContainerComponent } from './projecten-container/projecten-container.component';



@NgModule({
  declarations: [ProjectenContainerComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ProjectenContainerComponent
  ]
})
export class ProjectenOverzichtModule { }
