import { Injectable } from '@angular/core';
import Decimal from 'decimal.js';
import { BehaviorSubject, Subject } from 'rxjs';
import { CartItem } from '../common/cart-item';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private discountValue: Decimal = new Decimal(0);
  public totalValue: Decimal = new Decimal(0);

cartItems: CartItem[] = [];
totalPrice: Subject<number> = new BehaviorSubject<number>(0);
totalQuantity: Subject<number> = new BehaviorSubject<number>(0);
storage: Storage = sessionStorage;

constructor() {
  let data = JSON.parse(this.storage.getItem('cartItems')!);

  if (data != null) {
    this.cartItems = data;
    this.computeCartTotals();
  }
}

addToCart(theCartItem: CartItem) {
  let alreadyExistsInCart: boolean = false;
  let existingCartItem: CartItem | undefined;

  if (this.cartItems.length > 0) {
    existingCartItem = this.cartItems.find(tempCartItem => tempCartItem.id === theCartItem.id)
    alreadyExistsInCart = (existingCartItem != undefined);
  }

  if (alreadyExistsInCart) {
    existingCartItem!.quantity++;
  } else {
    this.cartItems.push(theCartItem)
  }
  this.computeCartTotals();
}

computeCartTotals() {
  let totalPriceValue: number = 0;
  let totalQuantityValue: number = 0;

  for (let currentCartItem of this.cartItems) {
    totalPriceValue += currentCartItem.quantity * currentCartItem.price;
    totalQuantityValue += currentCartItem.quantity;
  }

  this.totalPrice.next(totalPriceValue);
  this.totalQuantity.next(totalQuantityValue);
  this.persistCartItems();
}

persistCartItems() {
  this.storage.setItem('cartItems', JSON.stringify(this.cartItems));
}

logCartData(totalPriceValue: number, totalQuantityValue: number) {
  for (let cartItem of this.cartItems) {
    const subTotalPrice = cartItem.price * cartItem.quantity;
  }
}

decrementQuantity(theCartItem: CartItem) {
  theCartItem.quantity--;
  if (theCartItem.quantity === 0) {
    this.remove(theCartItem);
  }
  else {
    this.computeCartTotals();
  }
}

remove(cartItem: CartItem) {
  const itemIndex = this.cartItems.findIndex(tempCartItem => tempCartItem.id === cartItem.id);
  if (itemIndex > -1) {
    this.cartItems.splice(itemIndex, 1);
    this.computeCartTotals();
  }
}

  setDiscountValue(discountValue: Decimal): void {
    this.discountValue = discountValue;
  }

  setTotalValue(value: number) {
    this.totalValue = new Decimal(value);
  }
}
