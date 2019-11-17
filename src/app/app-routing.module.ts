import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProjectFormComponent } from './new-project/components/add-project-form/add-project-form.component';
import { AddProjectComponent } from './new-project/components/add-project/add-project.component';
import { ProjectenContainerComponent } from "./projecten-overzicht/projecten-container/projecten-container.component";
import { EditpageComponent } from "./edit-project/editpage/editpage.component";

import { ProjectProgressContainerComponent } from './project-progress-details/project-progress-container/project-progress-container.component';


const routes: Routes = [
  {path: 'add-project', component: AddProjectFormComponent},
  {path: 'add-project/:id', component: AddProjectFormComponent},
  {path: '', component: AddProjectComponent},
  {path: 'projecten', component: ProjectenContainerComponent},
  {path: 'editProject/:id', component: EditpageComponent},
  {path: 'project-progress', component: ProjectProgressContainerComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
