import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Decimal from 'decimal.js';
import { SelectItem } from 'primeng/api';
import { Observable, take } from 'rxjs';
import { CartItem } from 'src/app/common/cart-item';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';
import { DiscountService } from 'src/app/services/discount.service';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.scss'],
})
export class CartDetailComponent {

  quantityOptions: SelectItem[] = [{label: '1', value: 1 }, {label: '2', value: 2 }, {label: '3', value: 3}, {label: '4', value: 4}];
  cartItems: CartItem[] = [];
  totalPrice: number = 0;
  totalQuantity: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.listCartDetails();
  }

  listCartDetails() {
    this.cartItems = this.cartService.cartItems;
    this.cartService.totalPrice.subscribe(
      data => this.totalPrice = data
    );
    this.cartService.totalQuantity.subscribe(
      data => this.totalQuantity = data
    );
    this.cartService.computeCartTotals();
  }

  incrementQuantity(theCartItem: CartItem) {
    this.cartService.addToCart(theCartItem);
  }

  decrementQuantity(theCartItem: CartItem) {
    this.cartService.decrementQuantity(theCartItem);
  }

  remove(theCartItem: CartItem) {
    this.cartService.remove(theCartItem);
  }

  getSubtotal() {
    return this.cartItems.map(t => t.price * t.quantity).reduce((acc, value) => acc + value, 0);
  }
}
