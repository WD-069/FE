const tasks = [
  'Complete the project',
  'Attend the meeting',
  'Write a report',
  'Review the code',
  'Fix the bugs',
  'Update the documentation',
  'Plan the next sprint',
  'Conduct user testing',
  'Optimize the performance',
  'Design',
];

// Selecting items
const addItemBtn = document.getElementById('add-item-btn');
const alertBtn = document.getElementById('alert-btn');
const consoleBtn = document.getElementById('console-btn');
const itemList = document.getElementById('item-list');

// Attaching the event to addItemBtn
addItemBtn.addEventListener('click', () => {
    const newItem = document.createElement('li');
    newItem.textContent = tasks[Math.floor(Math.random() * tasks.length - 1)]
    itemList.appendChild(newItem);
    itemList.scrollTop = itemList.scrollHeight;
})

// Attaching event to alertBtn
alertBtn.addEventListener('click', () =>{
    alert('This is an alert message');
})

// Attaching event to consoleBtn
consoleBtn.addEventListener('click', () => {
    console.log('Button was clicked!')
})