// enum Direction {
//   Up,
//   Down,
//   Left,
//   Right,
// }

// let move: Direction = Direction.Up;

// function turnWithOutEnum(dir: Direction) {
//   if (dir === Direction.Right) {
//     console.log("Turning left");
//   }
// }

// turnWithOutEnum(Direction.Right);

// # String Literal Unions
// * Defines a type that can only be one of the specific string values. Simpler than Enums.
type DirectionUnion = "left" | "right" | "up" | "down";

function turnWithOutEnum(dir: DirectionUnion) {
  if (dir === "left") {
    console.log("Turning left");
  }
}

// turnWithOutEnum("left");

// # Type Narrowing

// * Truthiness Narrowing
// * Checks if a value is "truthy" (not null, undefined, empty string) to narrow its type.
const alertMe = (msg: string): void => {
  if (msg) {
    alert(msg);
  } else {
    alert("Did you forget why you wanted to be alerted?");
  }
};

// alertMe("test");

// * Equality Narrowing
function compare(x: string | number, y: string | boolean) {
  if (x === y) {
    // * Since x and y are equal, TS knows they must be of the overlapping type (string).
    console.log(x.toUpperCase());
    console.log(y.toLocaleUpperCase());
  }
}

compare(4, "4");
compare(4, true);
// compare("3", "3");

// * Type Guards with typeof
// * Uses the runtime 'typeof' operator to narrow primitives (string, number, boolean).
// console.log(typeof false); // "boolean"
// console.log(typeof "I am a string!"); // "string"
// console.log(typeof ""); // "string"
// console.log(typeof 35); // "number"

function printValue(value: string | number): void {
  if (typeof value === "string") {
    console.log("value".toUpperCase());
  } else {
    // * TypeScript knows 'value' is a number here because the string case was handled.
    console.log(value.toFixed(2));
  }
}

// printValue(4);
// printValue("test");

// * Type Guarding Objects
// * Array.isArray is a built-in guard to check if an object is an array.
console.log(Array.isArray({ firstName: "Bob" }));
console.log(Array.isArray([1, 2, 3]));

// * The instanceof Operator
// * Checks if an object is an instance of a specific class (checks prototype chain).
function logDateOrString(val: Date | string) {
  if (val instanceof Date) {
    console.log(
      val.toLocaleDateString("de-DE", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    );
  } else {
    console.log(val.trim());
  }
}

logDateOrString("1989-12-24");
logDateOrString(new Date("1989-12-24"));

const throwSomething = (throwError: boolean) => {
  try {
    if (throwError) {
      throw new Error("This will be the message");
    } else {
      // ! Throwing strings instead of Error objects is possible but not recommended.
      throw "This would cause a runtime error, if we try to access it.";
    }
  } catch (error) {
    // * Variables in catch blocks are 'unknown'. We must narrow them (e.g., using instanceof Error) to safely access properties.
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.log(error);
      console.log("Default error message");
    }
  }
};

// throwSomething(true);
// throwSomething(false);

// * The `in` Operator
// * Checks if a property key exists in an object. Useful for distinguishing shapes.

// type Dog = { bark: () => void };
// type Cat = { meow: () => void };

// type Pet = Dog | Cat;

// // * Custom Type Predicates
// // * 'pet is Dog' return type informs TS: if this function returns true, the argument is a Dog.
// const isDog = (pet: Pet) => {
//   return "bark" in pet;
// };

// function speak(pet: Pet) {
//   if (isDog(pet)) {
//     pet.bark();
//   } else {
//     pet.meow();
//   }
// }

// // --- Example Instances ---
// const dog: Dog = {
//   bark: () => console.log("Woof!"),
// };

// const cat: Cat = {
//   meow: () => console.log("Meow!"),
// };

// // --- Usage ---
// speak(dog); // Output: Woof!
// speak(cat); // Output: Meow!

// * Discriminated Unions
// * Uses a common literal property ('kind') to distinguish between union members.
type Dog = { kind: "dog"; bark: () => void };
type Cat = { kind: "cat"; meow: () => void };

type Pet = Dog | Cat;

function speak(pet: Pet) {
  if (pet.kind === "dog") {
    // * TS knows this is a Dog because we checked the 'kind' property.
    pet.bark();
  } else {
    pet.meow();
  }
}

const dog: Dog = {
  kind: "dog",
  bark: () => console.log("Woof!"),
};

const cat: Cat = {
  kind: "cat",
  meow: () => console.log("Meow!"),
};

speak(dog); // Output: Woof!
speak(cat); // Output: Meow!

// # Type Assertion
const btn = document.querySelector("#btn")!;

// * Not Null Assertion (!)
// * Tells TS: "I guarantee this value is not null/undefined".
btn.textContent = "CLICK!!!!";
btn.classList.add("px-4");

// * Type Assertion with `as`
// * Manually casts the type when TS cannot infer the specific HTML element (e.g. from a generic selector).
const input = document.querySelector("#text-input") as HTMLInputElement;
// const input = document.querySelector<HTMLInputElement>("#text-input")!;
console.log(input.value);
