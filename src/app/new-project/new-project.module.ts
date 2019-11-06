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
import { ReactiveFormsModule } from "@angular/forms";
import { MatDialogModule } from "@angular/material/dialog";
import { RouterModule } from "@angular/router";

import {MatFormFieldModule} from '@angular/material/form-field';

import { InlineSVGModule } from 'ng-inline-svg';


@NgModule({
  declarations: [
    AddProjectComponent,
    AddProjectFormComponent,
    AddProductComponent,
    AddProjectInfoComponent,
    AddProductFormComponent,
    ProductComponent,
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
    InlineSVGModule
  ],
  entryComponents: [AddProductFormComponent]
})
export class NewProjectModule { }
