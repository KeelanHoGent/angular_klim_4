import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorizontalListClassroomsComponent } from './overzicht/horizontal-list-classrooms/horizontal-list-classrooms.component';
import { ClassroomListComponent } from './overzicht/classroom-list/classroom-list.component';
import { ClassroomComponent } from './overzicht/classroom/classroom.component';



@NgModule({
  declarations: [HorizontalListClassroomsComponent, ClassroomListComponent, ClassroomComponent],
  imports: [
    CommonModule
  ]
})
export class ClassroomModule { }
