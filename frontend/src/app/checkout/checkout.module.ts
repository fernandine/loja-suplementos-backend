import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartStatusComponent } from './cart-status/cart-status.component';
import { BadgeModule } from 'primeng/badge';

@NgModule({
  imports: [
    CommonModule,
    BadgeModule
  ],
  declarations: [
    CartStatusComponent,

  ],
  exports: [
    CartStatusComponent,

  ],
})
export class CheckoutModule { }
