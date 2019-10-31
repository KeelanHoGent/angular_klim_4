import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenubarModule } from "./menubar/menubar.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectService } from "./services/project.service";
import { TemplateService } from "./services/template.service";
import { HttpClientModule } from "@angular/common/http";
import { ProjectenOverzichtModule } from "./projecten-overzicht/projecten-overzicht.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    ProjectenOverzichtModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    ProjectService,
    TemplateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
