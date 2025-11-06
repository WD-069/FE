const array1 = [10, 20, 30, 40, 50];
const array2 = ['x', 'y', 'z'];

// 1
array1.splice(2, 1, 35, 36)
console.log(array1)

// 2

const modifiedArray = array2.toSpliced(1, 1, "b", "c")
console.log(array2)
console.log(modifiedArray)