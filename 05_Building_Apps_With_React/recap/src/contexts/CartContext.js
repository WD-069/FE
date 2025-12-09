import { createContext, useContext } from "react";

export const CartContext = createContext();

export const useCart = () => {
    const context = useContext(CartContext);
    if(!context) {
        throw new Error("useCart can only be used within CartState")
    }
    return context;
}