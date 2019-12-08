import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenubarModule } from './menubar/menubar.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ProjectService } from './services/project.service';
import { HttpClientModule } from '@angular/common/http';
import { ProjectenOverzichtModule } from './projecten-overzicht/projecten-overzicht.module';
import { AddProjectTemplateComponent } from './project-templates/add-project-template/add-project-template.component';


import { MatListModule, MatCardModule, MatIconModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatInputModule, MatDialogModule, MatSelectModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { ProjectenTemplateOverzichtComponent } from './project-templates/projecten-template-overzicht/projecten-template-overzicht.component';

import { NewProjectModule } from './new-project/new-project.module';
import { EditProjectModule } from "./edit-project/edit-project.module";
import { ProductentemplateOverzichtModule } from './productentemplate-overzicht/productentemplate-overzicht.module';
import { ProjectProgressDetailsModule } from './project-progress-details/project-progress-details.module';
import { GroupService } from './services/group.service';
import { EditProjectTemplateComponent } from './project-templates/edit-project-template/edit-project-template.component';


@NgModule({
  declarations: [
    AppComponent,
    ProjectenTemplateOverzichtComponent,
    AddProjectTemplateComponent,
    EditProjectTemplateComponent
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
    MatSelectModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    NewProjectModule,
    EditProjectModule,
    ProductentemplateOverzichtModule
  ],
  providers: [
    ProjectService,
    GroupService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
