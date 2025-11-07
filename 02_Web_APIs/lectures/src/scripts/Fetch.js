let pizzaOrder = new Promise((resolve, reject) => {
  let pizzaReady = true;

  if (pizzaReady) {
    resolve('Pizza is ready!');
  } else {
    reject('Sorry, no pizza ready');
  }
});

pizzaOrder
  .then((message) => {
    console.log('Success: ', message);
  })
  .catch((error) => {
    console.error('Error: ', error);
  });

let result;
let url = 'https://jsonplaceholder.typicode.com/users';

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    // console.log('Data: ', data);
    result = data;
    // console.log(result)
  })
  .catch((error) => console.error('Error: ', error));

let postUrl = 'https://jsonplaceholder.typicode.com/posts';

// fetch(postUrl, {
//   method: 'POST',
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
//   body: JSON.stringify({
//     title: 'New Title',
//     body: 'This is the body',
//     userId: 1,
//   }),
// })
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));

// console.log("Result outside the then: ", result);

const fetchUsers = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data)
    return data;
  } catch (error) {
    console.error('Error: ', error);
  }
};
fetchUsers();

const list = document.getElementById('list');

const displayUser = (user) => {
  const userCard = document.createElement('div');
  const img = document.createElement('img');
  img.alt = user.name;
  img.src = '#';

  const bodyCard = document.createElement('div');
  const title = document.createElement('h4');
  title.textContent = user.name;

  bodyCard.appendChild(title);

  userCard.appendChild(img);
  userCard.appendChild(bodyCard);

  list.appendChild(userCard);
};

window.addEventListener('load', async (event) => {
  const users = await fetchUsers();
  console.log(users);
  users.forEach((user) => displayUser(user));
});
