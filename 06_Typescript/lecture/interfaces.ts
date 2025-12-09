export interface IPerson {
  name: string;
  age: number;
  address?: string;
  username: string;
  email: string;
}
export interface IEmployee extends IPerson {
  salary: number;
  isAdmin: boolean;
}
export interface ICustomer extends IPerson {
  purchaseHistory: string[];
}
