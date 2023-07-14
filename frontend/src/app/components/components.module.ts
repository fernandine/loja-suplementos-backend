import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CheckoutModule } from "../checkout/checkout.module";
import { ProductListComponent } from './product-list/product-list.component';
import { ImageModule } from 'primeng/image';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { CurrencyFormatPipe } from '../shared/pipe/currency-format.pipe';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CarouselModule } from 'primeng/carousel';
import { RouterModule } from '@angular/router';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { TableModule } from 'primeng/table';
import { DividerModule } from 'primeng/divider';
import { TabViewModule } from 'primeng/tabview';
import { BooleanPipe } from '../shared/pipe/boolean.pipe';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';

@NgModule({
    declarations: [
        FooterComponent,
        HeaderComponent,
        ProductListComponent,
        CurrencyFormatPipe,
        BooleanPipe,
        HomeComponent,
        ProductDetailComponent,
        BreadcrumbComponent
    ],
    exports: [
        FooterComponent,
        HeaderComponent,

    ],
    imports: [
      CommonModule,
      DropdownModule,
      InputNumberModule,
      FormsModule,
      CheckoutModule,
      ImageModule,
      TableModule,
      RatingModule,
      TabViewModule,
      ButtonModule,
      InputTextModule,
      CarouselModule,
      RouterModule,
      DividerModule
    ]
})
export class ComponentsModule {}
