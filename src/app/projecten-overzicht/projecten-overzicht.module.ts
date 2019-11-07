import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectenContainerComponent } from './projecten-container/projecten-container.component';
import { MatCardModule } from "@angular/material/card";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { SharedModule } from "../shared/shared.module";
import { MatButtonModule } from "@angular/material/button";
import { NewProjectModule } from "../new-project/new-project.module";

import { NewProjectModule } from "../new-project/new-project.module";

@NgModule({
  declarations: [
    ProjectenContainerComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    SharedModule,
    MatButtonModule,
    NewProjectModule
  ],
  exports: [
    ProjectenContainerComponent
  ]
})
export class ProjectenOverzichtModule { }
