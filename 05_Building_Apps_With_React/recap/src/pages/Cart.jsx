import { useCart } from "../contexts"
import { ProductCard } from "../components";

function Cart() {
  const { cartState, cartDispatch } = useCart();
  return (
    <div>
      {cartState.cart.map((p) => <ProductCard product={p} />)}
    </div>
  )
}

export default Cart