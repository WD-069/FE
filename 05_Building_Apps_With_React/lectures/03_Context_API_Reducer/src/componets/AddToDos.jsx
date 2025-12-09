import { useState } from "react";
import { useToDos } from "../contexts";

function AddToDos() {
    const [newTodo, setNewTodo] = useState("");
    const { state, dispatch } = useToDos();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!newTodo) return;
        dispatch({ type: 'Add_Todo', payload: newTodo });
        setNewTodo("")
    };
    console.log(state)
  return (
    <form onSubmit={handleSubmit}>
      <input onChange={(e) => setNewTodo(e.target.value)} value={newTodo} type='text' name='todo' placeholder='Add a new todo...' />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddToDos;
