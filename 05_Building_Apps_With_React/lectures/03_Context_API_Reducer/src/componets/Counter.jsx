import { useToDos } from "../contexts";

function Counter({count, setCount}) {
    // const {counter, setCounter} = useToDos();
  return (
    <div>
      <button onClick={() => setCount(count - 1)}>-</button>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export default Counter;
