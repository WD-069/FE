import { useEffect, useState } from "react";

const Effect = () => {
  const [todo, setTodo] = useState(null);
  const [count, setCount] = useState(0);
  const [myObject, setMyObject] = useState({ test: 42 });

  // # Effect 1: Mount Only
  // * The empty dependency array [] ensures this runs ONLY ONCE after the initial render (Mount).
  // * Ideal for API calls or setting up subscriptions that only need to happen once.
  useEffect(() => {
    console.log("Effect is executed when mounted");
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => res.json())
      .then((data) => setTodo(data));
  }, []);

  // # Effect 2: Every Render
  // ! WARNING: Omitted dependency array means this runs AFTER EVERY SINGLE RENDER.
  // ! Be careful: Setting state here triggers an infinite loop!
  useEffect(() => {
    console.log("Is executed after every render");
  });

  // # Effect 3: On Dependency Change
  // * Runs on mount AND whenever 'myObject' changes (referential equality check).
  // * React compares current vs previous value of dependencies.
  useEffect(() => {
    console.log(
      "Is always executed after re-render, when [myObject] has changed"
    );
    console.log(myObject);
  }, [myObject]);

  // # Effect 4: Cleanup Function
  // * The return function is the "Cleanup Function".
  // * It runs BEFORE the effect re-runs (on update) and when the component unmounts.
  // * Essential for cleaning up side effects like event listeners, timers, or subscriptions to prevent memory leaks.
  useEffect(() => {
    const handleRezise = (e) => {
      console.log(e.target.innerWidth);
    };

    window.addEventListener("resize", handleRezise);

    return () => {
      // * Cleanup: Removes the event listener when component unmounts
      window.removeEventListener("resize", handleRezise);
    };
  }, []);

  return (
    <div>
      {todo && <p>{todo.title}</p>}
      <button type="button" onClick={() => setCount((c) => c + 1)}>
        Count: {count}
      </button>
    </div>
  );
};
export default Effect;
