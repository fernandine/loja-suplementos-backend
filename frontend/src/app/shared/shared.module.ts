import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooleanPipe } from './pipe/boolean.pipe';
import { PrimengModule } from '../primeng.module';
import { CurrencyFormatPipe } from './pipe/currency-format.pipe';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HeaderMobileComponent } from './layout/header-mobile/header-mobile.component';

@NgModule({
  imports: [
    CommonModule,
    PrimengModule,
    FormsModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    CurrencyFormatPipe,
    BooleanPipe,
    HeaderMobileComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    CurrencyFormatPipe,
    BooleanPipe
  ],
})
export class SharedModule {}

