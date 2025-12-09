import { useReducer, useState } from "react";
import { ToDosContext } from "./ToDosContext";

const reducer = (state, action) => {
    switch(action.type) {
        case "Add_Todo":
            return {
                ...state,
                todos: [{id: Date.now(), text: action.payload, completed: false}, ...state.todos]
            }
        case "Toggle_Todo":
            return {
                ...state,
                todos: state.todos.map(todo => todo.id === action.payload ? {...todo, completed: !todo.completed} : todo)
            }
        default:
            return state;
    }
}

const ToDosState = ({children}) => {
    const [state, dispatch] = useReducer(reducer, {todos: []})
    const [counter, setCounter] = useState(0)
    return <ToDosContext value={{ state, dispatch, counter, setCounter }}>{children}</ToDosContext>;
}

export default ToDosState;