import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/app/common/order';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
})
export class OrderListComponent {
  order: Order | null = null;

  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService,
    private router: Router
  ) {}

  ngOnInit() {
    const orderId = this.route.snapshot.params['id'];

    this.orderService.loadById(orderId).subscribe((order: Order) => {
      this.order = order;
    });
  }
  onOrderDetail() {
    this.router.navigate(['/account/order-history']);
  }
}
