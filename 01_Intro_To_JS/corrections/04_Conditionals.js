const temperature = 30;

// if...else
if(temperature < 15) {
    console.log("It's cold, wear a coat!")
} else {
    console.log("You can just wear a light jacket.")
}

// if...else if... else
if(temperature < 15) {
    console.log("It's cold, wear a coat!")
} else if(temperature <= 25) {
  console.log('You can just wear a light sweater.');
} else {
    console.log("It's too hot. Just wear a t-shirt");
}

// switch
let message;

switch(temperature) {
    case 10:
        message = "It's cold, wear a coat!";
        break;
    case 20:
        message = 'You can just wear a light sweater.';
        break;
    case 30: 
        message = "It's too hot. Just wear a t-shirt";
        break;
    default:
        message = "Enter a specific number: 10, 20 or 30!"
}

console.log("switch: ", message)