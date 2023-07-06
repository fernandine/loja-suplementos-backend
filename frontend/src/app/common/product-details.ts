import Decimal from 'decimal.js';

export interface ProductDetails {
  id: string;
  flavor: string;
  wheight: Decimal;
  brand: string;
  gluten: boolean;
  lactose: boolean;
  vegan: boolean;
}
