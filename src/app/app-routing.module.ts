import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AddProjectFormComponent } from './new-project/components/add-project-form/add-project-form.component';
import { AddProjectComponent } from './new-project/components/add-project/add-project.component';
import { ProjectenContainerComponent } from './projecten-overzicht/projecten-container/projecten-container.component';
import { EditpageComponent } from './edit-project/editpage/editpage.component';
import { ProductListComponent } from './productentemplate-overzicht/product-list/product-list.component';
import { AddProductTemplateFormComponent } from './productentemplate-overzicht/add-product-template-form/add-product-template-form.component';

import { AddProjectTemplateComponent } from './project-templates/add-project-template/add-project-template.component';
import { ProjectenTemplateOverzichtComponent } from './project-templates/projecten-template-overzicht/projecten-template-overzicht.component';

import { ProjectProgressContainerComponent } from './project-progress-details/project-progress-container/project-progress-container.component';
import {AuthGuard} from './user/auth-guard.service';
import {ProductTemplateDetailsComponent} from './productentemplate-overzicht/product-template-details/product-template-details.component';
import {ProductTemplateResolver} from './productentemplate-overzicht/productTemplate-resolver';
import {LoginComponent} from './user/login/login.component';


import {EditProjectTemplateComponent} from './project-templates/edit-project-template/edit-project-template.component';
import {ProjectTemplateResolver} from './project-templates/projectTemplate-resolver';
import {ClassroomListComponent} from './classroom/overzicht/classroom-list/classroom-list.component';
import {ClassroomDetailComponent} from './classroom/classroomDetail/classroom-detail/classroom-detail.component';
import {ClassroomResolver} from './classroom/classroom-resolver';
import {ClassroomFormComponent} from './classroom/addClassroom/classroom-form/classroom-form.component';
import {StartScreenComponent} from "./start-screen/start-screen/start-screen.component";


const routes: Routes = [
    {path: '', component: StartScreenComponent},
    {path: 'login', component: LoginComponent},
    {path: 'projecten', canActivate: [AuthGuard], component: ProjectenContainerComponent},
    {path: 'add-project', canActivate: [AuthGuard], component: AddProjectFormComponent},
    {path: 'add-project/:id', canActivate: [AuthGuard], component: AddProjectFormComponent},
    {path: 'editProject/:id', canActivate: [AuthGuard], component: EditpageComponent},
    {path: 'producten', canActivate: [AuthGuard], component: ProductListComponent},
    {path: 'add-product-template', canActivate: [AuthGuard], component: AddProductTemplateFormComponent},
    {path: 'add-project-template', canActivate: [AuthGuard], component: AddProjectTemplateComponent},
    {path: 'projecttemplates', canActivate: [AuthGuard], component: ProjectenTemplateOverzichtComponent},
    {
      path: 'edit/project/template/:id',
      canActivate: [AuthGuard],
      component: EditProjectTemplateComponent,
      resolve: {projectTemp: ProjectTemplateResolver}
    },
    {path: 'add-product-template', canActivate: [AuthGuard], component: AddProductTemplateFormComponent},
    {path: 'project-progress', canActivate: [AuthGuard], component: ProjectProgressContainerComponent},
    {
      path: 'product-template-details/:id',
      canActivate: [AuthGuard],
      component: ProductTemplateDetailsComponent,
      resolve: {productTemp: ProductTemplateResolver}
    },
    {path: 'klassen', canActivate: [AuthGuard], component: ClassroomListComponent},
    {path: 'klas/:id', canActivate: [AuthGuard], component: ClassroomDetailComponent, resolve: {classroom: ClassroomResolver}},
    {path: 'add/classroom', canActivate: [AuthGuard], component: ClassroomFormComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
