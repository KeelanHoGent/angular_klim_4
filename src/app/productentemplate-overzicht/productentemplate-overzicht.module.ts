import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductTemplateComponent } from './product-template/product-template.component';
import { AddProductTemplateFormComponent } from './add-product-template-form/add-product-template-form.component';
import { RouterModule } from '@angular/router';
import {
  MatFormFieldModule,
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatOptionModule,
  MatSelectModule,
  MatTooltipModule,
  MatCheckboxModule,
  MatDialogActions,
  MatProgressSpinnerModule
} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { HorizontalListProductsComponent } from './horizontal-list-products/horizontal-list-products.component';


@NgModule({
  declarations: [
    ProductListComponent,
    ProductTemplateComponent,
    AddProductTemplateFormComponent,
    HorizontalListProductsComponent],

  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatOptionModule,
    MatSelectModule,
    ReactiveFormsModule,
    RouterModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatProgressSpinnerModule
  ],
  exports: [
    ProductListComponent
  ]
})
export class ProductentemplateOverzichtModule { }
