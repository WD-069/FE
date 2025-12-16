// ------------------------------------------
// Built-in Utility Types Practice
// ------------------------------------------

// # Utility Types: Partial
// * Partial constructs a type with all properties of Type set to optional.
// ! This is useful for "update" patterns where you only pass a subset of data to patch an existing record.

// 1. Partial
type User = {
  id: number;
  name: string;
  email: string;
  password: number;
};

// TODO: Create a variable `draftUser` of type Partial<User>
const draftUser: Partial<User> = { name: "Draft" };
console.log(draftUser);

// ------------------------------------------

// # Utility Types: Required
// * The opposite of Partial. It strips away the optional '?' modifier, forcing all fields to be present.

// 2. Required
type Settings = {
  darkMode?: boolean;
  fontSize?: number;
};

// TODO: Create a variable `strictSettings` of type Required<Settings>
const strictSettings: Required<Settings> = { darkMode: true, fontSize: 16 };

// ------------------------------------------

// # Immutability Level 1: Readonly (Flat Objects)
// * Readonly<T> prevents properties from being reassigned after creation.

// 3. Readonly - Simple
type SimpleBook = {
  title: string;
  author: string;
};

const simpleBook: Readonly<SimpleBook> = {
  title: "1984",
  author: "George Orwell",
};

// simpleBook.title = "Animal Farm"; // ❌ Error: Cannot assign to 'title' because it is a read-only property.

// ------------------------------------------

// # Immutability Level 2: "as const" (Literals)
// * "as const" freezes the object deeply at the time of creation.
// * It converts arrays to "readonly tuples" and objects to "readonly properties" with specific literal types.

const literalBook = {
  title: "1984",
  author: "George Orwell",
} as const;

// literalBook.title = "Animal Farm"; // ❌ Error: Cannot assign to read-only property.

// ------------------------------------------

// # Immutability Level 3: The "Shallow" Trap (Nested Objects)
// ! WATCH OUT: TypeScript's Readonly<T> is "shallow". It locks the top-level keys, but NOT the objects inside them.

type NestedBook = {
  author: {
    firstName: string;
    lastName: string;
  };
  year: number;
  title: string;
};

const nestedBook: Readonly<NestedBook> = {
  author: { firstName: "Frank", lastName: "Herbert" },
  year: 1965,
  title: "Dune",
};

// ! This IS allowed (unfortunately) because 'author' is just a reference, and the object inside isn't frozen.
nestedBook.author.firstName = "Brian";

// nestedBook.year = 2020; // ❌ This is correctly blocked.

// ------------------------------------------

// # Immutability Level 4: Deep Structure (Arrays & recursion)

type DeepBook = {
  author: {
    firstName: string;
    lastName: string;
  };
  year: number;
  title: string;
  awards: {
    title: string;
    year: number;
  }[];
};

const deepBook: DeepBook = {
  author: { firstName: "Ursula", lastName: "Le Guin" },
  year: 1969,
  title: "The Left Hand of Darkness",
  awards: [
    { title: "Hugo Award", year: 1970 },
    { title: "Nebula Award", year: 1969 },
  ],
};

// ------------------------------------------

// # Advanced: Indexed Access Types (Lookup Types)
// * We can use the bracket notation `Type["key"]` to grab the type of a specific property.
// ! IMPORTANT: In TS types, we DO NOT have dot-notation. We MUST use brackets ["author"].

// --- SECTION 1: BASIC & NESTED LOOKUP ---

// 1. Grab a top-level property
type BookTitle = DeepBook["title"]; // string

// 2. Grab a nested property (Drill down)
// "Give me the type of author, and then inside that, give me the type of firstName"
type AuthorFirstName = DeepBook["author"]["firstName"]; // string

// --- SECTION 2: ARRAY UNWRAPPING ---

// # Unwrapping Arrays: [number] vs [0]
// * Standard Arrays (`Type[]`) are unordered. We use `[number]` to get "the type of any item".
// * Tuples (`[A, B]`) are fixed. We CAN use `[0]` or `[1]` to get specific positions.

// CASE A: Standard Array (Use [number])
// 'awards' is a list of identical objects. There is no type difference between index 0 and 1.
type AwardItem = DeepBook["awards"][number];
type AwardTitle = DeepBook["awards"][number]["title"];

// CASE B: Tuples (Use [0], [1]...)
// Imagine a book format defined as a Tuple: [FormatName, PageCount]
type BookFormat = [string, number];

// Here, index 0 is ALWAYS a string, and index 1 is ALWAYS a number.
type FormatName = BookFormat[0]; // string
type PageCount = BookFormat[1]; // number

// ------------------------------------------

// # "typeof" with Arrays
// * Using `typeof` combined with `[number]` on a constant array creates a Union Type of all values.

const colors = ["red", "green", "blue"] as const;

type Color = (typeof colors)[number]; // "red" | "green" | "blue"

// ------------------------------------------

// # Utility Types: Record
// * Record<Keys, Type> constructs an object type whose property keys are Keys and whose property values are Type.
// * It is the standard way to define "Dictionaries" or "Hash Maps" in TypeScript.

// 4. Record

// Example A: Simple String Dictionary
// Use this when you have unknown dynamic keys (like user IDs).
const scores: Record<string, number> = {
  alice: 42,
  bob: 36,
  // charlie: "hello" // ❌ Error: Type string is not assignable to type number
};

// Example B: Strict Union Keys (The "Pro" Pattern)
// ! PRO TIP: Record is extremely powerful when combined with Union Types.
// ! It enforces "Exhaustiveness": You MUST provide a value for every single key in the Union.

type UserRole = "admin" | "editor" | "viewer";

const permissions: Record<UserRole, string[]> = {
  admin: ["create", "edit", "delete"],
  editor: ["edit", "view"],
  viewer: ["view"],
  // ! If you delete 'viewer' from here, TypeScript will throw an error immediately!
};

console.log(scores);

// ------------------------------------------

// # Utility Types: Pick
// * Pick allows you to "Whitelist" specific properties from an existing type.

// 5. Pick
type Contact = {
  id: number;
  name: string;
  email: string;
  phone: string;
};

type EmailInfo = Pick<Contact, "name" | "email">;
const contactInfo: EmailInfo = { name: "Grace", email: "grace@example.com" };

// ------------------------------------------

// # Utility Types: Omit
// * Omit allows you to "Blacklist" specific properties.

// 6. Omit
type ContactNoPhone = Omit<Contact, "phone">;

const contactNoPhone: ContactNoPhone = {
  id: 1,
  name: "Alan",
  email: "alan@example.com",
};

type RegistrationInput = {
  name: string;
  email: string;
  password: string;
  comparePassword: string;
};

// * Common Use Case: Removing sensitive fields or UI-specific fields before sending data to an API.
type SignInInput = Omit<RegistrationInput, "name" | "comparePassword">;
