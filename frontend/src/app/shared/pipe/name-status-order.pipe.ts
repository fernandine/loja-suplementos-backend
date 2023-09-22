import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusOrder'
})
export class NameStatusOrderPipe implements PipeTransform {

  transform(value: any): string {
    switch (value) {
      case 'WAITING_PAYMENT':
        return 'Pendente de pagamento';
      case 'PAID':
        return 'Pago';
      case 'SHIPPED':
        return 'Enviado';
      case 'PENDING':
        return 'Pendente';
      case 'READY_TO_SHIP':
        return 'Pronto para envio';
        case 'WAITING_PAYMENT_CONFIRMATION':
          return 'Aguardando confirmação do pagamento';
      case 'DELIVERED':
        return 'Entregue';
      case 'CANCELED':
        return 'Cancelado'
      default: return value;

    }
  }

}
