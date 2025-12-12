// const stringArrys: string[] = ["1", "2", "3", "4"];
// * Generic Syntax: Array<T> is the same as T[]
const stringArrys: Array<string> = ["1", "2", "3", "4"];

fetch("https://duckpond-89zn.onrender.com/wild-ducks");

// # Generic Functions
// # Generic Type Aliases

type Duck = {
  _id: string;
  name: string;
  imgUrl: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

type Movie = {
  original_title: string;
  poster_path: string;
  id: number;
};

// * "T" is a placeholder (Type Parameter) that will be replaced by a concrete type later
// * This makes ApiResponse reusable for ANY data structure (Ducks, Movies, Users...)
type ApiResponse<T> = {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
};

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZTQxYjQyOWE1Yjc5Y2NlNWU5ZDVlOGRkN2I1ZTBiZiIsIm5iZiI6MTc1MjA1NTI0My40MDYwMDAxLCJzdWIiOiI2ODZlM2RjYjQwMjcyOTQ2MTY1MWVhZWMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.mOYov4BfVmQENUBBXFhVELz6GnVTfGZPsIN4ZVBjDvk",
  },
};

// * <T> declares a Generic Type Parameter for this function
// * It captures the type provided at the call site and enforces it on the return value (Promise<T>)
const fetchData = async <T>(url: string, options?: RequestInit): Promise<T> => {
  const res = await fetch(url, options);
  if (!res.ok) throw new Error("Fetch failed");
  return res.json();
};

// * Here we explicitly specify that T is Duck[]
// * TypeScript now knows that "ducks" is an array of Duck objects
const ducks = await fetchData<Duck[]>(
  "https://duckpond-89zn.onrender.com/wild-ducks",
);

// ducks.forEach((duck) => console.log(duck.name, duck.imgUrl));

// * Reusing the same function with a complex nested type
const tmdbResponse = await fetchData<ApiResponse<Movie>>(
  "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
  options,
);

// console.log(tmdbResponse);

// tmdbResponse.results.forEach((movie) => {
//   console.log(movie.original_title);
// });

// # Constraining Generics
// * "extends" limits T to types that satisfy the LengthWise interface (must have .length)
type LengthWise = {
  length: number;
};

const logLength = <T extends LengthWise>(value: T) => {
  console.log(value.length);
};

// const logLength = (value: unknown) => {
//   if (value?.length) {
//     console.log(value.length);
//   }
// };

// * Works because string has a .length property
logLength("45");
// * Works because Array has a .length property
logLength([1, 2, 3, 4]);
// * Works because this object has a .length property
logLength({ name: "Sally", length: 7 });
// ! Error: number does not have a .length property
// logLength(3);

// # Default Generic Types
// T defaults to string, when no type given:
// type ApiResponse<T = string> = {
//   status: number;
//   data: T;
//   message?: string;
// };

// # Using several Types in a Generic

// * We can declare multiple independent type parameters (T and U)
const makeTuple = <T, U>(item1: T, item2: U): [T, U] => [item1, item2];

const myTuple = makeTuple(3, "Jimmy");

// # The `object` Type vs `{}`

// const makeTupleArray = <T extends {}}>(obj: T) => Object.entries(obj);
// * "extends object" ensures T is a non-primitive type (arrays, objects, functions)
// ! This prevents passing primitives like string, number, or null which don't work well with Object.entries
const makeTupleArray = <T extends object>(obj: T) => Object.entries(obj);

const myObj = {
  a: "Some string",
  b: "Another string",
};

console.log(makeTupleArray(myObj));

// ! These would fail because they are primitives
// console.log(makeTupleArray(42));
// console.log(makeTupleArray("string"));
// console.log(makeTupleArray(null));
// console.log(makeTupleArray(undefined));

// # The `keyof` Keyword
type SomeObject = {
  a: string;
  b: number;
};

// * keyof creates a Union Type of all keys in SomeObject ("a" | "b")
type SomeObjectKeys = keyof SomeObject;
// type SomeObjectKeys = "a" | "b";

const someKey: SomeObjectKeys = "a";

// # Built-in utilities and helpers

// * Partial<T> creates a new type with all properties of T set to optional (?)
// * Useful for partial updates or form validation where fields might be missing initially
type User = {
  id: number;
  name: string;
  email: string;
  password: string;
};

const validateUserform = ({ name, email, password }: User) => {
  const newErrors: Partial<User> = {};

  if (!name.trim()) {
    newErrors.name = "Name is required";
  }
  if (!email.trim()) {
    newErrors.email = "Email is required";
  }
  if (!password.trim()) {
    newErrors.password = "Password is required";
  }

  return newErrors;
};
