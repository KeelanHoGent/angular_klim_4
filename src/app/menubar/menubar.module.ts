import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarContainerComponent } from './components/menubar-container/menubar-container.component';
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";



@NgModule({
  declarations: [MenubarContainerComponent],
  imports: [
    CommonModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    MenubarContainerComponent
  ]
})
export class MenubarModule { }
