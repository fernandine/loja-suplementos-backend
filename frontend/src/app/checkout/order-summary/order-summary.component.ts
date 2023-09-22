import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/app/common/order';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss'],
})
export class OrderSummaryComponent  {
  order!: Order;
  @ViewChild('orderDetail', { static: false }) orderDetail!: ElementRef;

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

  printOrder() {
    const printContents = this.orderDetail.nativeElement.innerHTML;
    const popupWin = window.open('', '_blank', 'width=800,height=800');

    if (popupWin) {
      popupWin.document.open();
      popupWin.document.write(`
        <html>
          <head>
            <title>Imprimir Pedido</title>
            <style>
      img {
        max-width: 10%;
        height: auto;
      }
      </style>
          </head>
          <body onload="window.print();">${printContents}</body>
        </html>`);
      popupWin.document.close();
    } else {
      alert(
        'Não foi possível abrir a janela de impressão. Verifique as configurações do bloqueador de pop-ups do seu navegador.'
      );
    }
  }
}
