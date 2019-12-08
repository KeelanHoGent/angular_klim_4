import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditpageComponent } from './editpage/editpage.component';



@NgModule({
  declarations: [EditpageComponent],
  imports: [
    CommonModule
  ],
  exports: [EditpageComponent],
  entryComponents: [
    EditpageComponent
  ]

})
export class EditProjectModule { }
