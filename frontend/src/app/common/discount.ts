import Decimal from "decimal.js";

export interface Discount {
  id: number,
  code: string,
  discountValue: Decimal,
  expirationDate: Date,
  discountedPrice: Decimal,
  productId: number
}
