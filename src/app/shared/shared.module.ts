import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorizontalListComponent } from './horizontal-list/horizontal-list.component';
import { ProjectSquareComponent } from "./project-square/project-square.component";
import { ActiveFilter, FinishedFilter } from "./filterProjects.pipe";




@NgModule({
  declarations: [
    HorizontalListComponent,
    ProjectSquareComponent,
    ActiveFilter,
    FinishedFilter
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HorizontalListComponent,
    ActiveFilter,
    FinishedFilter
  ]
})
export class SharedModule { }
