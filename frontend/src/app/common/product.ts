import Decimal from 'decimal.js';
import { Category } from './Category';
import { ProductDetails } from './product-details';
import { Subcategory } from './subcategory';

export interface Product {
  flavor(flavor: any): unknown;

  id: string;
  sku: string;
  name: string;
  description: string;
  unitPrice: Decimal;
  EAN: number;
  image: string;
  favorite: boolean;
  feature: boolean;
  sale: boolean;
  punitsInStock: number;
  salesCount: number;
  category: Category;
  subcategory: Subcategory;
  details: ProductDetails;

  rating: boolean;

}
