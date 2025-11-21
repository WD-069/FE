// import { useState } from "react";

const Counter = ({ state, setter }) => {
  //   const [state, setCounter] = useState(0);

  //   const handleCounter = () => {};
  //   const increaseCounter = () => setCounter(state + 1);
  //   console.log(props);
  //   const props = { state: 3, setter: setCounter(), text: "Hello" };
  //   const state = props.state
  //   const setter = props.setter

  return (
    <div>
      <h2>Counter</h2>
      <button
        onClick={() => {
          setter(state - 1);
        }}
      >
        -
      </button>
      <p>{state}</p>
      <button
        onClick={() => {
          setter(state + 1);
        }}
      >
        +
      </button>
    </div>
  );
};
export default Counter;
