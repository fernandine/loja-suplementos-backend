import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrimengModule } from '../primeng.module';
import { SharedModule } from '../shared/shared.module';
import { CategoryFilterComponent } from './category-filter/category-filter.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    PrimengModule,
    SharedModule,
  ],

  declarations: [
    CategoryFilterComponent,
    HomeComponent,
    ProductDetailComponent,
    ProductListComponent,
  ],
})
export class ComponentsModule {}
