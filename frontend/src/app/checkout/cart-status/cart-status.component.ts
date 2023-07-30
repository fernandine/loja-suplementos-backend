import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartItem } from 'src/app/common/cart-item';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-status',
  templateUrl: './cart-status.component.html',
  styleUrls: ['./cart-status.component.scss']
})
export class CartStatusComponent {

  cartItems: CartItem[] = [];
  totalPrice: number = 0.00;
  totalQuantity: number = 0;

  constructor(private cartService: CartService,
    private router: Router) {

  }
  ngOnInit(): void {
    this.updateCartStatus();
  }

  goCheckoutCart() {
    this.router.navigate(["/cart-details"])
  }

  updateCartStatus() {
   /* this.cartService.totalPrice.subscribe(
      (data: number) => this.totalPrice = data
    )*/

    this.cartService.totalQuantity.subscribe(
      (data: number) => this.totalQuantity = data
    )
  }
}
