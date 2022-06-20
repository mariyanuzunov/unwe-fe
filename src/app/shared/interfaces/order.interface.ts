import { IDoor } from './door.interface';
import { IUser } from './user.interface';

export interface IOrder {
  _id: string;
  status: string;
  customer: IUser;
  products: IDoor[];
  shippingAddress: string;
  createdAt: string;
}
