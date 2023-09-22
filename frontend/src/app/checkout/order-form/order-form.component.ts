import { UserService } from 'src/app/services/user.service';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartItem } from 'src/app/common/cart-item';

import { OrderService } from 'src/app/services/order.service';
import { CartService } from '../../services/cart.service';
import { Order } from 'src/app/common/order';
import { StatusOrder } from 'src/app/common/enums/status-order.enum';
import { User } from '../../common/user';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss'],
})
export class OrderFormComponent {
  totalPrice: number = 0;
  totalQuantity: number = 0;
  cartItems: CartItem[] = [];
  form!: FormGroup;

  constructor(
    private cartService: CartService,
    private orderService: OrderService,
    private fb: FormBuilder,
    private router: Router,
    private service: UserService
  ) {
    this.form = this.fb.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      cpf: [
        '',
        [
          Validators.required,
          Validators.minLength(11),
          Validators.maxLength(11),
        ],
      ],
      phone: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      cep: ['', Validators.required],
      logradouro: ['', Validators.required],
      complemento: [''],
      bairro: ['', Validators.required],
      localidade: ['', Validators.required],
      uf: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.listCartDetails();
    this.service.getAuthenticatedUser().subscribe((user) => {
      if (user) {
        this.form.patchValue({
          id: user.id,
          firstname: user.firstname,
          lastname: user.lastname,
          cpf: user.cpf,
          phone: user.phone,
          email: user.email,
        });

        if (user.addressList && user.addressList.length > 0) {
          const firstAddress = user.addressList[0];
          this.form.patchValue({
            cep: firstAddress.cep,
            logradouro: firstAddress.logradouro,
            complemento: firstAddress.complemento,
            bairro: firstAddress.bairro,
            localidade: firstAddress.localidade,
            uf: firstAddress.uf,
          });
        }
      }
    });
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
    const orderItems = this.cartService.cartItems.map(item => {
      return {
        productId: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        imgUrl: item.imgUrl,
        subTotal: item.price * item.quantity
      };
    });

    const order: Order = {
      id: 0,
      moment: new Date(),
      status: StatusOrder.WAITING_PAYMENT,
      client: this.form.value as User,
      payment: {
        moment: new Date(),
      },
      total: this.totalPrice,
      items: orderItems
    };

    this.orderService.createOrder(order).subscribe(
      (response) => {
        const orderId = response.id;
        this.router.navigate(['/order', orderId]);
      },
      (error) => {
        console.error('Erro ao criar o pedido:', error);
      }
    );
  }

  getSubtotal() {
    return this.cartItems
      .map((t) => t.price * t.quantity)
      .reduce((acc, value) => acc + value, 0);
  }
}
