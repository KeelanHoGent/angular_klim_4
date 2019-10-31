import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddProjectComponent } from './components/add-project/add-project.component';
import { AddProjectFormComponent } from './components/add-project-form/add-project-form.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { AddProjectInfoComponent } from './components/add-project-info/add-project-info.component';
import { AddProductFormComponent } from './components/add-product-form/add-product-form.component';
import { ProductComponent } from './components/product/product.component';


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
    CommonModule
  ],
  entryComponents: [AddProductFormComponent]
})
export class NewProjectModule { }
