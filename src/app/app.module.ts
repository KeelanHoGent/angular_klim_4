import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenubarModule } from "./menubar/menubar.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectService } from "./services/project.service";
import { TemplateService } from "./services/template.service";
import { HttpClientModule } from "@angular/common/http";

import { MatListModule, MatCardModule, MatIconModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AddProjectComponent } from './add-project/add-project.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ProjectComponent } from './project/project.component';
import { ReactiveFormsModule } from '@angular/forms';

import { FormsModule } from '@angular/forms';
import { MatInputModule,MatDialogModule, MatTableModule, MatPaginatorModule, MatSortModule } 
from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import { AddProjectFormComponent } from './add-project-form/add-project-form.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddProjectInfoComponent } from './add-project-info/add-project-info.component';
import { AddProductFormComponent } from './add-product-form/add-product-form.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    AddProjectComponent,
    ProjectComponent,
    AddProjectFormComponent,
    AddProductComponent,
    AddProjectInfoComponent,
    AddProductFormComponent,
    ProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    BrowserAnimationsModule,
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
    MatButtonModule
  ],
  providers: [
    ProjectService,
    TemplateService
  ],
  bootstrap: [AppComponent],
  entryComponents: [AddProductFormComponent]
})
export class AppModule { }
