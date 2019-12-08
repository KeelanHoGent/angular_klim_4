import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProjectFormComponent } from './new-project/components/add-project-form/add-project-form.component';
import { AddProjectComponent } from './new-project/components/add-project/add-project.component';
import { ProjectenContainerComponent } from "./projecten-overzicht/projecten-container/projecten-container.component";
import { EditpageComponent } from "./edit-project/editpage/editpage.component";
import { ProductListComponent } from './productentemplate-overzicht/product-list/product-list.component';
import { AddProductTemplateFormComponent } from './productentemplate-overzicht/add-product-template-form/add-product-template-form.component';

import { AddProjectTemplateComponent } from './project-templates/add-project-template/add-project-template.component';
import { ProjectenTemplateOverzichtComponent } from './project-templates/projecten-template-overzicht/projecten-template-overzicht.component';

import { ProjectProgressContainerComponent } from './project-progress-details/project-progress-container/project-progress-container.component';
import {ProductTemplateDetailsComponent} from './productentemplate-overzicht/product-template-details/product-template-details.component';
import {ProductTemplateResolver} from './productentemplate-overzicht/productTemplate-resolver';


const routes: Routes = [
  {path: 'add-project', component: AddProjectFormComponent},
  {path: 'add-project/:id', component: AddProjectFormComponent},
  {path: '', component: AddProjectComponent},
  {path: 'projecten', component: ProjectenContainerComponent},
  {path: 'editProject/:id', component: EditpageComponent},
  {path: 'project-progress', component: ProjectProgressContainerComponent},
  {path: 'producten', component: ProductListComponent},
  {path: 'add-product-template', component: AddProductTemplateFormComponent},
  {
    path: 'add-project-template',
    component: AddProjectTemplateComponent
  },
  {
    path: 'projecttemplates',
    component: ProjectenTemplateOverzichtComponent
  },

  {path: 'add-product-template', component: AddProductTemplateFormComponent},
  {path: 'project-progress', component: ProjectProgressContainerComponent},
  {path: 'product-template-details/:id', component: ProductTemplateDetailsComponent, resolve: {productTemp: ProductTemplateResolver}}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
