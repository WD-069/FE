const array = ['apple', 'banana', 'cherry', 'date'];

const joinedDefault = array.join();
console.log(joinedDefault)

const joinedWithDash = array.join('-');
console.log(joinedWithDash)

const joinedWithSpace = array.join(' ');
console.log(joinedWithSpace);

const joinedWithAnd = array.join(' and ');
console.log(joinedWithAnd);

const joinedWithEmtyString = array.join("");
console.log(joinedWithEmtyString);