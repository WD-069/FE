// 1
const myArray = [42, 'Hello, world!', true, 3.14, 'JavaScript'];
// 2
console.log(myArray)

// 3
// console.log(myArray[0])
// console.log(myArray[1])
// console.log(myArray[2])
// console.log(myArray[3])
// console.log(myArray[4])

for(let i = 0; i < myArray.length; i++) {
    console.log("ForLoop: ", myArray[i])
}

myArray.forEach((item) => console.log("For Each: ",item))

// 4
myArray[2] = false
console.log(myArray[2])