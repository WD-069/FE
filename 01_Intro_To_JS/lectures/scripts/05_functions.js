function sum(n1, n2) {
    return n1 - n2
}

const result = sum(1, 2);
console.log(result)

function greet(name) {
    if(!name) {
        return "Hello"
    }
    return `Hello, ${name}`
}

console.log(greet())
console.log(greet("Alice"))

const students = ["Foca", "Bethel", "Sarah"];

for(let i = 0; i < students.length; i++) {
    console.log(greet(students[i]));
}