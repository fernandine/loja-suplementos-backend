import { OrderItem } from "./order-item";
import { StatusOrder } from "../common/enums/status-order.enum";
import { Payment } from "../common/payment";
import { Client } from './client';

export interface Order {
  id: number;
  moment: Date;
  status: StatusOrder;
  client: Client;
  payment: Payment;
  total: number;
  items: OrderItem[];
}
