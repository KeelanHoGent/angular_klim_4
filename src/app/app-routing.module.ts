import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProjectFormComponent } from './new-project/components/add-project-form/add-project-form.component';
import { AddProjectComponent } from './new-project/components/add-project/add-project.component';
import { ProjectenContainerComponent } from "./projecten-overzicht/projecten-container/projecten-container.component";
import { ProductListComponent } from './productentemplate-overzicht/product-list/product-list.component';
import { AddProductTemplateFormComponent } from './productentemplate-overzicht/add-product-template-form/add-product-template-form.component';

import { AddProjectTemplateComponent } from './project-templates/add-project-template/add-project-template.component';
import { ProjectenTemplateOverzichtComponent } from './project-templates/projecten-template-overzicht/projecten-template-overzicht.component';

import { ProjectProgressContainerComponent } from './project-progress-details/project-progress-container/project-progress-container.component';


const routes: Routes = [
  {path: 'add-project', component: AddProjectFormComponent},
  {path: '', component: AddProjectComponent},
  {path: 'projecten', component: ProjectenContainerComponent},
  {path: 'producten', component: ProductListComponent},
  {path: 'add-product-template', component: AddProductTemplateFormComponent}
  {
    path: 'add-project-template',
    component: AddProjectTemplateComponent
  },
  {
    path: 'projecttemplates',
    component: ProjectenTemplateOverzichtComponent
  },

  {path: 'project-progress', component: ProjectProgressContainerComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
