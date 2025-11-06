const person = {
  name: 'Alice',
  surname: 'Smith',
  address: {
    city: 'Berlin',
    postalcode: 13055,
    street: {
      streetName: 'Gartenstr.',
      number: 22,
      floor: 3,
    },
  },
  hobbies: ['singing', 'reading'],
  pets: [
    {
      petName: 'Tom',
      species: 'cat',
      breed: 'Domestic cat',
    },
    {
      petName: 'Bolita',
      species: 'dog',
      breed: 'golden retriever',
    },
  ],
  greet: function (name) {
    console.log(`Hi, ${name}`);
  },
};

console.log(person);
console.log(person.address);
console.log(person.address.street.name);

// const newPerson = {...person}
// console.log(newPerson)

const {
  name,
  surname,
  address,
//   address: {
//     street: { streetName, number, floor },
//     postalcode,
//     city,
//   },
  ...rest
} = person;

const city = address.city; 
console.log(address)


// console.log(streetName);
// console.log(city);
// console.log(postalcode);
// console.log(rest)

person.greet("Sarah")
console.log(person.hobbies)
console.log(person.hobbies[1])

console.log(person.pets[0])
console.log(person.pets[0].petName)

delete person.pets[1].petName;
console.log(person.pets[1]);
