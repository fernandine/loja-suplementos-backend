import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyFormatPipe } from './pipe/currency-format.pipe';
import { BooleanPipe } from './pipe/boolean.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [BooleanPipe, CurrencyFormatPipe],
  exports: [BooleanPipe, CurrencyFormatPipe],
})
export class SharedModule {}

