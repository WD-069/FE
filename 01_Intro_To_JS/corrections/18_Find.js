// 1
const numbers = [10, 20, 30, 40, 50];

// 2
const greaterThan25 = numbers.find((num) => num > 25)
console.log(greaterThan25)

// 3 
const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 },
  { name: 'David', age: 40 }
];

// 4
const personNamedCharlie = people.find(({name}) => name === "Charlie")
console.log(personNamedCharlie)