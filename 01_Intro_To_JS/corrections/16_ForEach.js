// 1
const numbers = [1, 2, 3, 4, 5];

// 2
numbers.forEach((num) => console.log(num))

// 3
let sum = 0;
numbers.forEach((num) => sum += num)
console.log(sum)

// 4
const squareNumbers = [];
numbers.forEach((num) => squareNumbers.push(num * num))
console.log(squareNumbers)