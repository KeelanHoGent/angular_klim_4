import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarContainerComponent } from './components/menubar-container/menubar-container.component';



@NgModule({
  declarations: [MenubarContainerComponent],
  imports: [
    CommonModule
  ],
  exports: [
    MenubarContainerComponent
  ]
})
export class MenubarModule { }
