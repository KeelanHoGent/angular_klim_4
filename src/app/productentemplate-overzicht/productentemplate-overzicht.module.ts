import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductTemplateComponent } from './product-template/product-template.component';
import { AddProductTemplateFormComponent } from './add-product-template-form/add-product-template-form.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductTemplateComponent,
    AddProductTemplateFormComponent],

  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ProductListComponent
  ]
})
export class ProductentemplateOverzichtModule { }
