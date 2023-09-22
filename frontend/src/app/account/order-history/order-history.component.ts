import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/app/common/order';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss']
})
export class OrderHistoryComponent {
  orders: Order[] = [];

  constructor(
    private service: OrderService,
  ) { }

  ngOnInit() {
    this.service.getOrders().subscribe((orders: Order[]) => {
      this.orders = orders;
    })
  }
}

