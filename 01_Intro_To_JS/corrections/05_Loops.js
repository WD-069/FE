const animals = ['lion', 'tiger', 'bear', 'giraffe', 'monkey', 'zebra'];
const animal = "lion"
console.log(animal[2])
console.log(animals[0][0])
// for loop
let counter = 0;
for(let i = 0; i < animals.length; i++) {
    counter++
}
console.log(counter);

// while loop
let countFiveLettersOrMore = 0;
let index = 0;
while(index < animals.length){
    if(animals[index].length >= 5) {
        countFiveLettersOrMore++
    }
    index++
}
console.log(countFiveLettersOrMore);

// do...while
index = 0
let countUntilM = 0;
do {
    if(animals[index][0].toLowerCase() === "m") {
        break;
    }
    countUntilM++
    index++;
} while (index < animals.length);

console.log(countUntilM)