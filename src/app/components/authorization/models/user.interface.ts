import { Address } from './address.interface';

export interface User {
  login: string;
  firstName: string;
  address: Address;
}