import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductTemplateComponent } from './product-template/product-template.component';
import { AddProductTemplateFormComponent } from './add-product-template-form/add-product-template-form.component';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule, MatCardModule, MatButtonModule, MatIconModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductTemplateComponent,
    AddProductTemplateFormComponent],

  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,
    RouterModule,
    MatFormFieldModule,
  ],
  exports: [
    ProductListComponent
  ]
})
export class ProductentemplateOverzichtModule { }
