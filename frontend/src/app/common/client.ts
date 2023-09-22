import { Address } from "./address";

export interface Client {
  email: string;
  firstname: string;
  lastname: string;
  cpf: string;
  phone: string;
  addressList: Address[];
}
