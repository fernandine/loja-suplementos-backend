import Decimal from 'decimal.js';
import { Flavors } from './enums/flavors.enum';

export interface ProductDetails {
  id: string;
  flavors: Flavors;
  wheight: Decimal;
  brand: string;
  gluten: boolean;
  lactose: boolean;
  vegan: boolean;
}
