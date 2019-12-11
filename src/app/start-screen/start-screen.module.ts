import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartScreenComponent } from './start-screen/start-screen.component';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [StartScreenComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class StartScreenModule { }
