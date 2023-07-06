import { Injectable } from '@angular/core';
import Decimal from 'decimal.js';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { CartItem } from '../common/cart-item';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItemsSubject = new BehaviorSubject<CartItem[]>([]);
  public cartItems$ = this.cartItemsSubject.asObservable();
  public totalQuantity = new BehaviorSubject<number>(0);
  private storage = new StorageService();
  private discountValue: Decimal = new Decimal(0);
  public totalValue: Decimal = new Decimal(0);
  constructor() {}

  addCartItem(cartItem: CartItem) {
    const currentCartItems = this.cartItemsSubject.getValue();
    const existingCartItemIndex = currentCartItems.findIndex(item => item.id === cartItem.id);

    if (existingCartItemIndex > -1) {
      currentCartItems[existingCartItemIndex].quantity += cartItem.quantity;
    } else {
      currentCartItems.push(cartItem);
    }
  }

  setDiscountValue(discountValue: Decimal): void {
    this.discountValue = discountValue;
  }

  getDiscountValue(): Decimal {
    return this.discountValue;
  }
  setTotalValue(value: number) {
    this.totalValue = new Decimal(value);
  }
  getTotalValue() {
    return this.totalValue.toNumber();
  }

  getStoredCartItems(): CartItem[] {
    return this.storage.getItem('cartItems') || [];
  }

  getCartItems(): Observable<CartItem[]> {
    const cartItems = this.storage.getItem('cartItems') || [];
    return of(cartItems);
  }

  updateStoredCartItems(cartItems: CartItem[]): void {
    this.storage.setItem('cartItems', cartItems);
  }

  public addToCart(cartItem: CartItem) {
    this.addCartItem(cartItem);
  }

  public removeCartItem(cartItem: CartItem) {
    const currentCartItems = this.cartItemsSubject.getValue();
    const updatedCartItems = currentCartItems.filter(item => item.id !== cartItem.id);
    this.cartItemsSubject.next(updatedCartItems);
  }

  public getSubtotal(): Decimal {
    let subtotal = new Decimal(0);
    this.cartItemsSubject.getValue().forEach((item) => {
      subtotal = subtotal.plus(new Decimal(item.price).times(item.quantity));
    });
    return subtotal;
  }
}
