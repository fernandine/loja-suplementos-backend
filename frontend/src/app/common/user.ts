import { Role } from "./role";
import { Address } from './address';

export interface User {
  id: string;
  email: string;
  firstname: string;
  lastname: string;
  password: string;
  cpf: string;
  phone: string;
  roles: Role[];
  addressList: Address[];
}
