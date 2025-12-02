let hobbies = JSON.parse(localStorage.getItem('hobbies')) || [];
console.log(hobbies)

let person = JSON.parse(localStorage.getItem('person')) || {};
console.log(person)

// localStorage.setItem('hobbies', JSON.stringify(['Singing', 'reading', 'writing']));
// console.log(hobbies)
const form = document.getElementById('nameForm')
const list = document.getElementById('list');

const createLi = (hobby) => {
    const li = document.createElement('li');
    li.textContent = hobby;
    list.appendChild(li)
}
hobbies.forEach((hobby) => {
    createLi(hobby)
})

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const newHobby = document.getElementById('nameInput').value.trim();
    hobbies.push(newHobby);
    console.log(hobbies)
    localStorage.setItem('hobbies', JSON.stringify(hobbies));
    createLi(newHobby);
})
// localStorage.setItem('person', JSON.stringify({name: 'John Doe', age: 44}));






// updating value
// localStorage.setItem('age', JSON.stringify(45));

// localStorage.setItem('hobbies', JSON.stringify(hobbies.filter((hobby) => hobby != 'reading')))
// hobbies = JSON.parse(localStorage.getItem('hobbies'));
// console.log(hobbies)

// person.email = 'mar@gmail.com'
// localStorage.setItem('person', JSON.stringify(person))
// person = JSON.parse(localStorage.getItem('person'));
// console.log(person)

//Removing values
localStorage.removeItem('username')

// localStorage.clear()
