import { OrderItem } from "./order-item";
import { Client } from './client';
import { StatusOrder } from "../common/enums/status-order.enum";
import { Payment } from "../common/payment";

export interface Order {
  id: string;
  moment: Date;
  status: StatusOrder;
  client: Client;
  payment: Payment;
  total: number;
  items: OrderItem[];
}
