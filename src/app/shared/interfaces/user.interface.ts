export interface IUser {
  _id: string;
  role: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  purchases: string[];
  accessToken: string;
}
