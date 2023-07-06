import Decimal from 'decimal.js';
import { Category } from './Category';
import { ProductDetails } from './product-details';
import { Subcategory } from './subcategory';

export interface Product {
  id: string;
  sku: string;
  name: string;
  description: string;
  unitPrice: Decimal;
  EAN: number;
  image: string;
  favorite: boolean;
  punitsInStock: number;
  salesCount: number;
  category: Category;
  subcategory: Subcategory;
  details: ProductDetails;

  rating: boolean;

}
