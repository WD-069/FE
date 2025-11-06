// 1
const numbers = [1, 2, 3, 4, 5];
console.log(numbers)

// 2
const doubleNumbers = numbers.map((num) => num * 2)
console.log(doubleNumbers)

// 3
const stringNumbers = numbers.map((num) => `Number: ${num}`)
console.log(stringNumbers)

// 4
const numberObjects = numbers.map((num) => ({original: num, square: num ** 2}))
console.log(numberObjects)