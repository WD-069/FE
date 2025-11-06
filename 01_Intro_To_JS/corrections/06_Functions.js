// ES5 version
// 1
function greet() {
    console.log("Hello World")
}
greet()

// 2
function sum(n1, n2){
    return n1 + n2
}

console.log(sum(2,4))

// 3
function getDayName(dayNumber) {
    let dayName;
    let errorMessage;
    switch(dayNumber){
        case 0:
            dayName = "Sunday"
            break;
        case 1:
            dayName = "Monday"
            break
        case 2:
            dayName = "Tuesday"
            break
        case 3:
            dayName = "Wednesday"
            break
        case 4:
            dayName = "Thursday"
            break
        case 5:
            dayName = "Friday"
            break
        case 6:
            dayName = "Saturday"
            break
        default:
            errorMessage = "Only enter numbers between 0 and 6!"
    }
    if(!dayName) return console.error(errorMessage);
    return dayName;
}
console.log(getDayName(1))

// ES6 or arrow function
// 1
const greeting = () => {
    console.log("Hello Class")
}
greeting()

// 2
const square = (num) => {
    return num ** 2
}
console.log(square(5))

// 3
const getDayNameArrow = (dayNumber) => {
  let dayName;
  let errorMessage;
  switch (dayNumber) {
    case 0:
      dayName = 'Sunday';
      break;
    case 1:
      dayName = 'Monday';
      break;
    case 2:
      dayName = 'Tuesday';
      break;
    case 3:
      dayName = 'Wednesday';
      break;
    case 4:
      dayName = 'Thursday';
      break;
    case 5:
      dayName = 'Friday';
      break;
    case 6:
      dayName = 'Saturday';
      break;
    default:
      errorMessage = 'Only enter numbers between 0 and 6!';
  }
  if (!dayName) return console.error(errorMessage);
  return dayName;
}
console.log(getDayNameArrow(10));

// Function expressions

const greetExpression = function() {
    console.log("Hello world")
}
greetExpression()

const squareExpression = function(num) {
    return num ** 2
}

const squareResult = squareExpression(2);
console.log(squareResult)

const getDayNameExpression = function (dayNumber) {
  let dayName;
  let errorMessage;
  switch (dayNumber) {
    case 0:
      dayName = 'Sunday';
      break;
    case 1:
      dayName = 'Monday';
      break;
    case 2:
      dayName = 'Tuesday';
      break;
    case 3:
      dayName = 'Wednesday';
      break;
    case 4:
      dayName = 'Thursday';
      break;
    case 5:
      dayName = 'Friday';
      break;
    case 6:
      dayName = 'Saturday';
      break;
    default:
      errorMessage = 'Only enter numbers between 0 and 6!';
  }
  if (!dayName) return console.error(errorMessage);
  return dayName;
};
console.log(getDayNameExpression(2));