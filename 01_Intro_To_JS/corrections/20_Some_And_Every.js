// 1
const numbers = [4, 8, 15, 16, 23, 42];

// 2
const hasNumbersGreaterThan20 = numbers.some((num) => num > 20);
console.log(hasNumbersGreaterThan20);

// 3
const allNumbersAreLessThan50 = numbers.every((num) => num < 50);
console.log(allNumbersAreLessThan50);

// 4
const students = [
  { name: 'Alice', age: 25, passed: true },
  { name: 'Bob', age: 22, passed: false },
  { name: 'Charlie', age: 27, passed: true },
  { name: 'David', age: 20, passed: true },
];

// 5
const hasAnyStudentFailed = students.some((student) => student.passed === false);
console.log(hasAnyStudentFailed)

// 5
const areAllStudentsOlderThan18 = students.every((student) => student.age > 18);
console.log(areAllStudentsOlderThan18)
