import { Address } from "./address";

export interface Client {

  checkbox: boolean;

  id: string;
  email: string;
  firstname: string;
  lastname: string;
  password: string;
  cpf: string;
  phone: string;
  addressList: Address[];
}
