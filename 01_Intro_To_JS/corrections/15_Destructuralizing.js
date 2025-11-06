const fruits = ['apple', 'banana', 'cherry', 'date'];

const [fruit1, fruit2, fruit3] = fruits;
console.log(fruit1)
console.log(fruit2)
console.log(fruit3)

console.log(fruits[2])

// Initial object
const person = {
  name: 'John Doe',
  age: 30,
  address: {
    city: 'New York',
    zip: '10001',
  },
};
const {name, age} = person;
console.log(name, age)
// Initial function
function displayPerson(person) {
  console.log(`Name: ${person.name}, Age: ${person.age}`);
}
function displayPersonDestructuralize({name, age}) {
  console.log(`Name: ${name}, Age: ${age}`);
}

displayPerson(person)
displayPersonDestructuralize(person)
displayPersonDestructuralize(person.name, person.age)