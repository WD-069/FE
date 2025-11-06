const numbers = [1, 4, 5, 2, 3, 5, 4];

// console.log(numbers)
// console.log(numbers[2])
// console.log("length of the numbers array", numbers.length)
console.log(numbers[numbers.length - 1])
console.log(numbers[Math.floor(numbers.length/2)])
// console.log(numbers[0] + numbers[2])


// push()
numbers.push(10)
console.log(numbers)

// pop()
numbers.pop()
console.log(numbers)

// unshift()
numbers.unshift(10)
console.log(numbers)

// shift()
numbers.shift()
console.log(numbers)

// revese() and toReversed()
// numbers.reverse()
console.log(numbers)

const reversedCopy = numbers.toReversed()
console.log(reversedCopy)
console.log(numbers)

// splice() and toSplice()
let students = ["Sarah", "Oliver", "Jorge"];
students.splice(1, 0, "Lara")
// console.log(students);
students.splice(1, 2, "Lara", "Paul")
// console.log(students)

students =["Sarah", "Oliver", "Jorge"];
const studentsCopy = students.toSpliced(3)
console.log(studentsCopy)
const studentsCopy2 = students.toSpliced(1, 0, "Lara")
console.log(studentsCopy2)

console.log(students)