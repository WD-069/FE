let age = 10;
let stringAge = null

// == -> comparing values
// !=
if (age == stringAge) {
    console.log("Same value")
}
if (age != stringAge) {
    console.log("Not same")
}


// === -> comparing values and data types
// !==
if (age === stringAge) {
    console.log("Same value")
}
if (age !== stringAge) {
    console.log("Not same")
 }
// >
// <
// >=
// <=


// || -> or
// && -> and
// ! -> not

if (age >= 18 && age <= 120) {
    console.log("You are an adult")
} else if(age > 120) {
    console.log("You must be dead")
} else {
    console.log("I don't understand your age")
}

if (age > 18 || age == 18) {
    console.log('You are an adult');
}

// truthy -> true, any number but 0, strings, arrays, objects
// falsy -> false, 0, empty string (""), null, undefine

if(age) {
    console.log("Age has a truthy value")
}

if(!stringAge) {
    console.log("Age is falsy")
}

// ternary operator
const status = age >= 18 ? "adult" : "minor";
console.log("status:", status)