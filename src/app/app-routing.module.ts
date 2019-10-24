import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectenContainerComponent } from "./projecten-overzicht/projecten-container/projecten-container.component";


const routes: Routes = [
  {
    path: 'projecten',
    component: ProjectenContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
