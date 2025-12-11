import { User, UsersArray } from './types';
import { IPerson, IEmployee, ICustomer } from './interfaces';
const firstName: string = 'Laure';
let age: number = 22;
age = 23;

const user: { name: string; age: number | string; email: string } = {
  name: 'Sam',
  age: 30,
  email: '',
};
// user.email = "sam@gmail.com";
user.age = '31';

const numberArray: number[] = [1, 2, 3];
const stringArray: string[] = ['a', 'b', 'c'];
const mixedArray: (number | string)[] = [1, '2', 3, '4'];
const userArray: { name: string; age: number; email?: string }[] = [
  { name: 'Alice', age: 25, email: 'Alice@gmail.com' },
  { name: 'Bob', age: 28 },
];

const secondArray: Array<number | string | boolean> = [1, '2', true, 4, '5', false];

const tupleExample: [string, number, boolean] = ['Laure', 22, true];
const tupleStrings: [string, string, string] = ['Laure', '22', 'true'];

function greetUser(firstName: string | undefined): string {
  return 'Hello, ' + firstName;
}

greetUser('Laure');
greetUser(undefined);

function sum(num1: number, num2: number): void {
  console.log(num1 + num2);
}

const multiply = (num1: number, num2: number): number => {
  return num1 * num2;
};


const users: UsersArray = [
  { name: 'Alice', age: 25, email: '' },
  { name: 'Bob', email: '' },
];

const user1: IPerson = {
  name: 'Laure',
  age: 22,
  address: '123 Main St',
  username: 'Laure22',
  email: '',
};
const employee1: IEmployee = {
  name: 'Sam',
  age: 30,
  username: 'Sam30',
  email: '',
  salary: 50000,
  isAdmin: true,
};
const customer1: ICustomer = {
  name: 'Alice',
  age: 25,
  username: 'Alice25',
  email: '',
  purchaseHistory: ['item1', 'item2'],
};
