import { useCart } from "../contexts"

function ButtonCounterCart({product}) {
    const {cartState, cartDispatch} = useCart();
    const handleRemoveItem = () => {
        if(product.qty === 1) {
            cartDispatch({ type: 'Remove_From_Cart', product });
            localStorage.setItem(
              'cart',
              JSON.stringify(cartState.cart.filter((p) => product.id !== p.id))
            );
        } else {
            cartDispatch({type: "Remove_One", product})
            localStorage.setItem("cart", JSON.stringify(cartState.cart.map((p) =>
              p.id === product.id ? { ...p, qty: p.qty - 1, totalAmount: p.price * (p.qty - 1) } : p
            )));
        }
    }
    const handleAddItem = () => {
        cartDispatch({ type: 'Increase_One', product});
        localStorage.setItem(
          'cart',
          JSON.stringify(
            cartState.cart.map((p) =>
              p.id === product.id ? { ...p, qty: p.qty + 1, totalAmount: p.price * (p.qty + 1) } : p
            )
          )
        );
    }
    console.log(cartState)
  return (
    <div className='flex justify-around items-center'>
      <button onClick={handleRemoveItem} className='btn'>
        -
      </button>
      <span>{product.qty}</span>
      <button onClick={handleAddItem} className='btn'>
        +
      </button>
    </div>
  );
}

export default ButtonCounterCart;