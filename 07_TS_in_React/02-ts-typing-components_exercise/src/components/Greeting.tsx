// components/Greeting.tsx
// This component should receive a `name` string prop, if no name is passed, render 'Hello Stranger'

// # Type Definitions
type GreetingProps = {
  // * Optional property (marked by '?'). It can be undefined.
  name?: string;
};

const Greeting = ({ name }: GreetingProps) => {
  // # Conditional Logic / Fallback
  // * Using logical OR (||) to provide a default value if 'name' is falsy (undefined/empty)
  const stranger = name || "Stranger";
  return <h1>Hello, {stranger}!</h1>;
};

// const Greeting = ({ name = "Stranger" }) => {
//   return <h1>Hello, {name}!</h1>;
// };

export default Greeting;
