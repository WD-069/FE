// 1
const numbers = [5, 10, 15, 20, 25, 30];

// 2
const greaterThan15 = numbers.filter((num) => num > 15);
console.log(greaterThan15)

// 3
const people = [
  { name: 'Alice', grade: 85 },
  { name: 'Bob', grade: 92 },
  { name: 'Charlie', grade: 78 },
  { name: 'David', grade: 88 },
  { name: 'Eve', grade: 95 }
];

// 4
const studentsAbove80 = people.filter((person) => person.grade > 80);
console.log(studentsAbove80)