import { CartContext } from "./CartContext"
import {useState, useReducer, useEffect} from 'react'

const reducer = (state, action) => {
  switch(action.type) {
    case "Add_To_Cart":
      return {
        ...state,
        cart: [{...action.product, qty: 1, totalAmount: action.product.price }, ...state.cart]
      }
    case "Remove_From_Cart":
      return {
        ...state,
        cart: state.cart.filter((p) => action.product.id !== p.id)
      }
    case "Increase_One":
      return {
        ...state,
        cart: state.cart.map((p) => p.id === action.product.id ? {...p, qty: p.qty + 1, totalAmount: p.price * (p.qty + 1) } : p)
      }
    case "Remove_One":
      return {
        ...state,
        cart: state.cart.map((p) =>
          p.id === action.product.id ? { ...p, qty: p.qty - 1, totalAmount: p.price * (p.qty - 1) } : p
        ),
      };
  }
}

function CartState({children}) {
  const [totalItems, setTotalItems] = useState(0);
  const [cartState, cartDispatch] = useReducer(reducer, {cart: JSON.parse(localStorage.getItem("cart")) || []})
  return <CartContext value={{totalItems, setTotalItems, cartState, cartDispatch}}>{children}</CartContext>
}

export default CartState;