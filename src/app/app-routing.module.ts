import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProjectFormComponent } from './add-project-form/add-project-form.component';
import { AddProjectComponent } from './add-project/add-project.component';


const routes: Routes = [
  {path: 'add-project', component: AddProjectFormComponent},
  {path: '', component: AddProjectComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
