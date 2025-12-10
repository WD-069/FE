// components/Counter.tsx
// This component should receive an `initialCount` number prop
// Pass that initial count as the initial value of a piece of state called count

import { useState } from "react";

// # Component Logic
// Render buttons to increase, decrease and reset
const Counter = ({ initialCount }: { initialCount: number }) => {
  // # State Initialization
  // * Initialize local state using the passed prop 'initialCount'
  // ! Note: If 'initialCount' prop changes later, this state WON'T update automatically (unless using useEffect)
  const [count, setCount] = useState(initialCount);

  // # Event Handlers
  // * Explicitly typing the event object for better type safety
  const handleDecrease = (e: React.MouseEvent<HTMLButtonElement>) => {
    // * Type Assertion (as ...) tells TS we know this target is an HTMLButtonElement
    const target = e.target as HTMLButtonElement;
    if (target.value === "-") setCount((c) => c - 1);
  };

  return (
    <div>
      <p>Initial count: {initialCount}</p>
      <h2>Count: {count}</h2>

      {/* # State Updates */}
      {/* * Using functional update form (c => c + 1) guarantees we work with the latest state */}
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      
      <button value={"-"} onClick={handleDecrease}>
        Decrement
      </button>
      
      {/* * Resetting state to the initial prop value */}
      <button onClick={() => setCount(initialCount)}>Reset</button>
    </div>
  );
};

export default Counter;
