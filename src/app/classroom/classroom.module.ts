import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorizontalListClassroomsComponent } from './overzicht/horizontal-list-classrooms/horizontal-list-classrooms.component';
import { ClassroomListComponent } from './overzicht/classroom-list/classroom-list.component';
import { ClassroomComponent } from './overzicht/classroom/classroom.component';
import {MatIconModule} from "@angular/material/icon";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatButtonModule} from "@angular/material/button";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [HorizontalListClassroomsComponent, ClassroomListComponent, ClassroomComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    RouterModule
  ],
  exports: [
    ClassroomListComponent
  ]
})
export class ClassroomModule { }
