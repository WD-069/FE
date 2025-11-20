import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    // # Direct value Update - to overwrite the useState value
    // setCounter(1);
    // # Functional Update
    setCounter((sceduledValue) => sceduledValue + 1); // 1 + 1 = 2
    // console.log("New value of counter :", counter);
  };

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
