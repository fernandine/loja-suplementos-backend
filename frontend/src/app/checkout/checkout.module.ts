import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PrimengModule } from '../primeng.module';
import { SharedModule } from '../shared/shared.module';
import { CartDetailComponent } from './cart-detail/cart-detail.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { OrderFormComponent } from './order-form/order-form.component';
import { OrderListComponent } from './order-list/order-list.component';
import { NameStatusOrderPipe } from '../shared/pipe/name-status-order.pipe';

@NgModule({
  declarations: [
    CartDetailComponent,
    OrderFormComponent,
    OrderListComponent,
    ContactFormComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, PrimengModule, SharedModule ],
})
export class CheckoutModule {}