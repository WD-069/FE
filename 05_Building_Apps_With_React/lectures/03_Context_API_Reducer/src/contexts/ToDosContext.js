import { createContext, use } from "react";

export const ToDosContext = createContext();

export const useToDos = () => {
    const context = use(ToDosContext);
    if(!context) {
        throw new Error("useTodos context doesnt exit in this component")
    }
    return context
}