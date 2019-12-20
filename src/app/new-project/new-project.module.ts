import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddProjectComponent } from './components/add-project/add-project.component';
import { AddProjectFormComponent } from './components/add-project-form/add-project-form.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { AddProjectInfoComponent } from './components/add-project-info/add-project-info.component';
import { AddProductFormComponent } from './components/add-product-form/add-product-form.component';
import { ProductComponent } from './components/product/product.component';
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { MatDialogModule } from "@angular/material/dialog";
import { RouterModule } from "@angular/router";
import { AddGroupButtonComponent } from '../new-project/components/add-group-button/add-group-button.component';
import { GroupFormComponent } from '../new-project/components/group-form/group-form.component';


import {MatFormFieldModule} from '@angular/material/form-field';

import { InlineSVGModule } from 'ng-inline-svg';
import { GroupComponent } from './components/group/group.component';
import { EvaluationCComponent } from './components/evaluation-c/evaluation-c.component';
import { EvaluationCFormComponent } from './components/evaluation-c-form/evaluation-c-form.component';
import { EvaluationCAddButtonComponent } from './components/evaluation-c-add-button/evaluation-c-add-button.component';
import { AddPupilsComponent } from "./components/add-pupils/add-pupils.component";


@NgModule({
  declarations: [
    AddProjectComponent,
    AddProjectFormComponent,
    AddProductComponent,
    AddProjectInfoComponent,
    AddProductFormComponent,
    ProductComponent,
    AddGroupButtonComponent,
    GroupFormComponent,
    GroupComponent,
    EvaluationCComponent,
    EvaluationCFormComponent,
    EvaluationCAddButtonComponent,
    AddPupilsComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,
    MatDialogModule,
    RouterModule,
    MatFormFieldModule,
    InlineSVGModule,
    FormsModule
  ],
  entryComponents: [AddProductFormComponent, GroupFormComponent, EvaluationCFormComponent],
  exports: [AddProjectComponent]
})
export class NewProjectModule { }
