import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenubarModule } from './menubar/menubar.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ProjectService } from './services/project.service';
import { ProjectTemplateService } from './services/project-template.service';
import { HttpClientModule } from '@angular/common/http';
import { ProjectenOverzichtModule } from './projecten-overzicht/projecten-overzicht.module';
import { AddProjectTemplateComponent } from './project-templates/add-project-template/add-project-template.component';


import { MatListModule, MatCardModule, MatIconModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatInputModule,MatDialogModule, MatSelectModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { ProjectenTemplateOverzichtComponent } from './project-templates/projecten-template-overzicht/projecten-template-overzicht.component';
import { ProjectenTemplateDetailComponent } from './project-templates/projecten-template-detail/projecten-template-detail.component';

import { NewProjectModule } from './new-project/new-project.module';
import { ProjectProgressDetailsModule } from './project-progress-details/project-progress-details.module';


@NgModule({
  declarations: [
    AppComponent,
    ProjectenTemplateOverzichtComponent,
    AddProjectTemplateComponent,
    ProjectenTemplateDetailComponent,
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
    NewProjectModule
  ],
  providers: [
    ProjectService,
    ProjectTemplateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
