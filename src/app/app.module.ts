import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenubarModule } from "./menubar/menubar.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TemplateService } from "./services/template.service";
import { HttpClientModule } from "@angular/common/http";
import { ProjectenOverzichtModule } from "./projecten-overzicht/projecten-overzicht.module";

import { MatListModule, MatCardModule, MatIconModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatInputModule,MatDialogModule } from '@angular/material';
import {MatButtonModule} from '@angular/material/button';

import { ProjectService } from "./services/project.service";
import { NewProjectModule } from './new-project/new-project.module';
import { ProjectProgressDetailsModule } from './project-progress-details/project-progress-details.module';


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
    ProjectProgressDetailsModule,
    HttpClientModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    NewProjectModule
  ],
  providers: [
    ProjectService,
    TemplateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
