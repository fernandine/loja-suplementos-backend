import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooleanPipe } from './pipe/boolean.pipe';
import { PrimengModule } from '../primeng.module';
import { CurrencyFormatPipe } from './pipe/currency-format.pipe';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderMobileComponent } from './layout/header-mobile/header-mobile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NameStatusOrderPipe } from './pipe/name-status-order.pipe';

@NgModule({
  imports: [
    CommonModule,
    PrimengModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    CurrencyFormatPipe,
    BooleanPipe,
    HeaderMobileComponent,
    NameStatusOrderPipe
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    CurrencyFormatPipe,
    BooleanPipe,
    NameStatusOrderPipe
  ],
})
export class SharedModule {}

