import { useState } from "react";

// {darkTheme : boolean}
const Counter = ({ darkTheme }) => {
  const [counter, setCounter] = useState(0);

  const handleClick = (e) => {
    const operation = e.target.value;

    if (operation === "+") {
      setCounter((previousValue) => previousValue + 1);
    } else if (operation === "-") {
      if (counter <= 0) return;

      setCounter((previousValue) => previousValue - 1);
    }
  };

  // const increaseCounter = () => {
  //   setCounter((previousValue) => previousValue + 1);
  // };

  // const decreaseCounter = () => {
  //   setCounter((previousValue) => previousValue - 1);
  // };

  const textColor = darkTheme ? "text-white" : "text-black";

  return (
    <>
      <div
        className={`flex w-36 justify-between border-2 ${darkTheme ? "border-gray-100" : "border-black"}`}
      >
        <button
          value="+"
          onClick={handleClick}
          className={
            "w-12 cursor-pointer bg-green-400 p-4 font-bold " + textColor
          }
        >
          +
        </button>
        <span className={`p-4 ${textColor}`}>{counter}</span>
        <button
          disabled={counter === 0 ? true : false}
          value="-"
          onClick={handleClick}
          className={`w-12 p-4 font-bold ${counter === 0 ? "bg-gray-400" : "cursor-pointer bg-red-400"} ${textColor}`}
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
