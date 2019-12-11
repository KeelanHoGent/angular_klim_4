import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenubarModule } from './menubar/menubar.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ProjectService } from './services/project.service';
import { HttpClientModule } from '@angular/common/http';
import { ProjectenOverzichtModule } from './projecten-overzicht/projecten-overzicht.module';

import { MatListModule, MatCardModule, MatIconModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatInputModule, MatDialogModule, MatSelectModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';

import { NewProjectModule } from './new-project/new-project.module';
import { EditProjectModule } from './edit-project/edit-project.module';
import { ProductentemplateOverzichtModule } from './productentemplate-overzicht/productentemplate-overzicht.module';
import { ProjectProgressDetailsModule } from './project-progress-details/project-progress-details.module';
import { GroupService } from './services/group.service';
import { UserModule } from './user/user.module';
import { httpInterceptorProviders } from './interceptors';
import { AuthGuard } from './user/auth-guard.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ProjectTemplatesModule } from './project-templates/project-templates.module';
import { ClassroomModule } from './classroom/classroom.module';
import { AuthenticationService } from "./user/authentication.service";
import { StartScreenModule } from "./start-screen/start-screen.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    ProjectenOverzichtModule,
    BrowserAnimationsModule,
    ProjectProgressDetailsModule,
    ProjectTemplatesModule,
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
    ProductentemplateOverzichtModule,
    MatProgressSpinnerModule,
    ClassroomModule,
    UserModule,
    StartScreenModule
  ],
  providers: [
    ProjectService,
    GroupService,
    httpInterceptorProviders,
    AuthGuard,
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
