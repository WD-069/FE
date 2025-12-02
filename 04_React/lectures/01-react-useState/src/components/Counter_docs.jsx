import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  // const [user, setUser] = useState({ name: "", age: "" });

  const handleClick = () => {
    // setUser({ ...user, name: "Renke", city: "Hamburg" });
    // console.log(user);

    // # Direct value Update - to overwrite the useState value
    // setCounter(1);
    // # Functional Update - new value depends on the previous value
    setCounter((previousValue) => previousValue + 1); // 0 + 1 -> plan re-render with counter = 1
    setCounter((previousValue) => previousValue + 1); // 1 + 1 -> plan re-render with counter = 2
    // console.log("New value of counter :", counter);
  };
  // 0. plan re-render with new value. Wait till handleClick-function is done
  // 1. read/run/re-render the Counter component with new data/value
  // 2. comparing virtual-DOM with actual-DOM. Calculate difference & change actual-DOM with minimal changes

  return (
    <>
      <div className="flex w-36 justify-between border-2">
        <button
          onClick={handleClick}
          className="w-12 cursor-pointer bg-green-400 p-4 font-bold"
        >
          +
        </button>
        <span className="p-4">{counter}</span>
        <button
          onClick={handleClick}
          className="w-12 cursor-pointer bg-red-400 p-4 font-bold"
        >
          -
        </button>
      </div>
      <button
        onClick={() => {
          setCounter(0);
        }}
        className="mt-1 cursor-pointer bg-gray-300 p-2"
      >
        Reset
      </button>
    </>
  );
};
export default Counter;
