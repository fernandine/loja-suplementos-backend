import { Component } from '@angular/core';
import { CartItem } from 'src/app/common/cart-item';
import { Order } from 'src/app/common/order';
import { OrderService } from 'src/app/services/order.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss'],
})
export class OrderFormComponent {

  order: Order | null = null;
  cartItems: CartItem[] = [];
  totalPrice: number = 0;
  totalQuantity: number = 0;

  constructor(
    private cartService: CartService,
    private orderService: OrderService
  ) {}

  ngOnInit(): void {
    this.listCartDetails();
  }

  listCartDetails() {
    this.cartItems = this.cartService.cartItems;
    this.cartService.totalPrice.subscribe((data) => (this.totalPrice = data));
    this.cartService.totalQuantity.subscribe(
      (data) => (this.totalQuantity = data)
    );
    this.cartService.computeCartTotals();
  }

  incrementQuantity(theCartItem: CartItem) {
    this.cartService.addToCart(theCartItem);
  }

  decrementQuantity(theCartItem: CartItem) {
    this.cartService.decrementQuantity(theCartItem);
  }

  onSubmit() {
    //console.log('Botão "FINALIZAR PEDIDO" clicado');
    if (this.order != null) {
      this.orderService.createOrder(this.order).subscribe(
        (response) => {
          console.log('Pedido criado com sucesso:', response);
        },
        (error) => {
          console.error('Erro ao criar o pedido:', error);
        }
      );
    }
  }
  getSubtotal() {
    return this.cartItems.map(t => t.price * t.quantity).reduce((acc, value) => acc + value, 0);
  }
}
