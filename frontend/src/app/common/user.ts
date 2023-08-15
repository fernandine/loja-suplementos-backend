import { Role } from "./role";

export interface User {
  id: number;
  email: string;
  firstname: string;
  lastname: string;
  password: string;
  cpf: string;
  phone: string;
  birthDay: string;
  roles: Role[];
}
