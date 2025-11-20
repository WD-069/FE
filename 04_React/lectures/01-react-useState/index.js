const array = [
  "Foca",
  true,
  () => {
    console.log("Function is called");
  },
];

// const name = array[0];
// const boolean = array[1];
// const func = array[2];

const [name, booelan, func] = array;
console.log(name);

func();
