import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyFormat'
})
export class CurrencyFormatPipe implements PipeTransform {

  transform(value: any): string {
    const currencyString = parseFloat(value).toFixed(2).replace('.', ',');
    return `R$${currencyString}`;
  }
}
