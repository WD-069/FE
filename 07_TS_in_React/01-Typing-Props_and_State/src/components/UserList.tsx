import { useEffect, useState } from "react";

import type { User, ComponentStatus } from "../types";

const usersArr: User[] = [
  { id: 1, username: "Guybrush", info: "alert" },
  { id: 2, username: "Anakin", info: "failure" },
];

// # useState with TypeScript Generics & useEffect
const UserList = () => {
  // * useState with union type: User[] | null allows the state to be either an array or null
  // * This is useful for loading states where data might not be available initially
  const [users, setUsers] = useState<User[] | null>(null);
  // * Alternative: Type assertion (as User[]) tells TypeScript to treat the empty array as User[]
  // * This approach makes users always User[] (never null), so you'd need users.length check instead of optional chaining
  // ! Type assertion bypasses type checking - use with caution. The union type approach above is safer for loading states
  // const [users, setUsers] = useState([] as User[]);
  // * TypeScript infers the type from the initial value (0 → number)
  const [count, setCount] = useState(0);
  // * Explicit union type: value can be either number or string
  const [value, setValue] = useState<number | string>(0);

  //   const [loading, setLoading] = useState(false);
  //   const [error, setError] = useState<null | string>(null);
  // * Using a union type literal for status ensures only valid status values can be set
  // * TypeScript will error if you try to setStatus("invalid")
  const [status, setStatus] = useState<ComponentStatus>("idle"); // "loading" | "success" | "error" | "idle"

  // # useEffect Hook
  // * useEffect runs after render. Empty dependency array [] means it runs once on mount
  // * This pattern is commonly used for data fetching on component mount
  useEffect(() => {
    setStatus("loading");

    // Fetch logic goes here
    setUsers(usersArr);

    setStatus("success");
  }, []);

  return (
    <div>
      <h2>User List</h2>
      {/* # Optional Chaining for Safe Array Access */}
      {/* * Optional chaining (?.) safely handles null/undefined: if users is null, the expression returns undefined */}
      {/* * This prevents runtime errors when trying to call .map() on null */}
      {users?.map((user) => (
        <p key={user.id}>{user.username}</p>
      ))}
      {/* # Alternative: Short Circuit Evaluation */}
      {/* * && operator: if users is falsy (null/undefined), nothing renders */}
      {/* * If users is truthy, the map executes */}
      {/* {users && users.map((user) => <p key={user.id}>{user.username}</p>)} */}
    </div>
  );
};
export default UserList;
