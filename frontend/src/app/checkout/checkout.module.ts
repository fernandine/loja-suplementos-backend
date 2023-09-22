import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PrimengModule } from '../primeng.module';
import { SharedModule } from '../shared/shared.module';
import { CartDetailComponent } from './cart-detail/cart-detail.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { OrderFormComponent } from './order-form/order-form.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';

@NgModule({
  declarations: [
    CartDetailComponent,
    OrderFormComponent,
    ContactFormComponent,
    OrderSummaryComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, PrimengModule, SharedModule ],
})
export class CheckoutModule {}
