const helloSpan = document.getElementById('hello');
const updateColorBtn = document.getElementById('updateColor');
const clickMeBtn = document.getElementById('clickMe');
const nameForm = document.getElementById("nameForm");
const nameList = document.getElementById("list");

// console.log(helloSpan);
// console.log(helloSpan.id);
// console.log(helloSpan.textContent);
// console.log(helloSpan.className);
// helloSpan.className = "dark fontLg"
// console.log(helloSpan.classList)
// helloSpan.classList.add("light", "btn", "hello")
// console.log(helloSpan.classList);
// console.log(helloSpan.style);
// helloSpan.style.color = "darkblue"
// console.log(helloSpan.style.color);

updateColorBtn.addEventListener('click', () => {
  if (helloSpan.style.color === 'lightblue') {
    helloSpan.style.color = 'black';
  } else {
    helloSpan.style.color = 'lightblue';
  }
});

const handleClick = (event) => {
    console.log(event.target)
    console.log(event.target.textContent)
    console.log(event.target.nextSibling)
    console.log(event.target.previousSibling)
}

clickMeBtn.addEventListener('click', handleClick);


const addName = (name) => {
    const li = document.createElement("li");

    const span = document.createElement("span")
    span.textContent = name;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete"
    deleteBtn.addEventListener("click", () => {
        li.remove()
    })

    li.appendChild(span)
    li.appendChild(deleteBtn)
    
    nameList.appendChild(li)
}

nameForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const nameInput = document.getElementById("nameInput").value.trim()
    console.log(nameInput)
    addName(nameInput)
    nameForm.reset()
})