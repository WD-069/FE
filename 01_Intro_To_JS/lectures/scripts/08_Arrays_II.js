// high order function

function greet() {
    return `Hello, Maria`
}

function goodMornign() {
    return `Good Morning, Maria`
}

function goodAfternoon() {
    return `Good Afternoon, Maria`
}

function greetin1(greeting) {
    return greeting()
}

// console.log(greetin1(greet));
// console.log(greetin1(goodMornign));
// console.log(greetin1(goodAfternoon));

const animals = ["lion", "mouse", "cat", "dog", "Lizzard"];

// forEach() and map()
console.log(animals)
// console.log(animals[0])
// console.log(animals[1])
// console.log(animals[2])

const animalsForEach = animals.forEach((animal) => {
    console.log(animal)
    return animal
})

const animalsMap = animals.map((animal) => {
  console.log(animal.toUpperCase());
  return animal.toUpperCase();
});

console.log("animalsForEach", animalsForEach)
console.log("animalsMap", animalsMap)


// find() 
const foundItem = animals.find((animal) => {
  if (animal[0].toLowerCase() === 'l') {
    return animal;
  }
});

console.log("foundItem: ",foundItem)
// filter()
const filteredArray = animals.filter((animal) => {
    if(animal[0].toLowerCase() === "l") {
        return animal
    }
})
console.log("filter: ",filteredArray)


// some()
const numbers = [4,6,2];

const result = numbers.some((number) => number % 2 !== 0)
const isNotANumber = numbers.some((item) => typeof(item) !== "number");

console.log("some: ", result)
console.log("is not a number? : ", isNotANumber)

// every()
const areAllNumbers = numbers.every((item) => typeof item !== 'number');
console.log('Every :', areAllNumbers);

// reduce
const reduceResult = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
})

// sort() and toSorted()
numbers.sort((a, b) => a - b)
console.log(numbers)
// const sortedArray = numbers.toSorted((a, b) => a - b)

console.log(reduceResult)
function logingAnimals(animal) {
    console.log(animal)
}
function upperCaseAnimals(animal) {
    console.log(animal.toUpperCase())
    return animal.toUpperCase();
}
function printAllAnimals(animals, callback) {
    const array = [];
    for(let i = 0; i < animals.length; i++){
        const upperCaseAnimal = callback(animals[i])
        array.push(upperCaseAnimal);
    }
    return array;
}
// printAllAnimals(animals, upperCaseAnimals);