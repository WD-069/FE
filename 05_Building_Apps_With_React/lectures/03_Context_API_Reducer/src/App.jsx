import { useState, useReducer } from 'react';
import './App.css';
import { ToDosState } from './contexts';
import Counter from './componets/Counter';
import CounterReducer from './componets/CounterReducer';
import AddToDos from './componets/AddToDos';

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    default:
      throw new Error('Unkown action');
  }
}

function App() {
  const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <>
      <h2>Use Reducer</h2>
      <CounterReducer state={state} dispatch={dispatch} />
      <h2>Use State</h2>
      <Counter count={count} setCount={setCount} />
      <ToDosState>
        <AddToDos />
      </ToDosState>
    </>
  );
}

export default App;
