import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorizontalListComponent } from './horizontal-list/horizontal-list.component';
import { ProjectSquareComponent } from "./project-square/project-square.component";
import { ActiveFilter, FinishedFilter } from "./filterProjects.pipe";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { Routes, RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HorizontalListComponent,
    ProjectSquareComponent,
    ActiveFilter,
    FinishedFilter
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    RouterModule
  ],
  exports: [
    HorizontalListComponent,
    ActiveFilter,
    FinishedFilter
  ]
})
export class SharedModule { }
