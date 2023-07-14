import { Product } from "./product";
import { User } from "./user";

export interface Review {
  id: number;
  comment: string;
  rating: number;
  user: User;
  product: Product;
}
