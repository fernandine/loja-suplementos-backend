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



@NgModule({
    declarations: [
        FooterComponent,
        HeaderComponent,
        ProductListComponent,
        CurrencyFormatPipe
    ],
    exports: [
        FooterComponent,
        HeaderComponent,

    ],
    imports: [
      CommonModule,
      FormsModule,
      CheckoutModule,
      ImageModule,
      RatingModule
    ]
})
export class ComponentsModule {}
