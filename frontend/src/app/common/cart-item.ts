import { Product } from "./product";

export class CartItem {
  id: string;
  name: string;
  imageCart: string;
  price: number;
  quantity: number;


  constructor(product: Product) {
      this.id = product.id;
      this.name = product.name;
      this.imageCart = product.image;
      this.price = product.unitPrice.toNumber();

      this.quantity = 1;
  }
}
