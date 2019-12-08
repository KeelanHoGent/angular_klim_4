import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProjectenTemplateOverzichtComponent} from "./projecten-template-overzicht/projecten-template-overzicht.component";
import {AddProjectTemplateComponent} from "./add-project-template/add-project-template.component";
import {EditProjectTemplateComponent} from "./edit-project-template/edit-project-template.component";
import {ProjectTemplateComponent} from "./project-template/project-template.component";
import {MatIconModule} from "@angular/material/icon";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatCardModule} from "@angular/material/card";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {RouterModule} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";



@NgModule({
  declarations: [
    ProjectenTemplateOverzichtComponent,
    AddProjectTemplateComponent,
    EditProjectTemplateComponent,
    ProjectTemplateComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    RouterModule,
    MatButtonModule,
    MatDialogModule,
  ],
  exports: [
    ProjectenTemplateOverzichtComponent
  ]
})
export class ProjectTemplatesModule { }
