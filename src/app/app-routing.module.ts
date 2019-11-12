import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProjectFormComponent } from './new-project/components/add-project-form/add-project-form.component';
import { AddProjectComponent } from './new-project/components/add-project/add-project.component';
import { ProjectenContainerComponent } from "./projecten-overzicht/projecten-container/projecten-container.component";
import { AddProjectTemplateComponent } from './project-templates/add-project-template/add-project-template.component';
import { ProjectenTemplateOverzichtComponent } from './project-templates/projecten-template-overzicht/projecten-template-overzicht.component';


const routes: Routes = [
  {path: 'add-project', component: AddProjectFormComponent},
  {path: '', component: AddProjectComponent},
  {path: 'projecten', component: ProjectenContainerComponent},
  {
    path: 'add-project-template',
    component: AddProjectTemplateComponent
  },
  {
    path: 'projecttemplates',
    component: ProjectenTemplateOverzichtComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
