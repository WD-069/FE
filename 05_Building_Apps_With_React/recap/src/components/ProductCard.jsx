import { Link } from 'react-router-dom';
import { useCart } from '../contexts';
import ButtonCounterCart from './ButtonCounterCart';

function ProductCard({ product }) {
  const {cartState, cartDispatch} = useCart();
  const handleClick = () => {
    cartDispatch({ type: 'Add_To_Cart', product });
    localStorage.setItem(
      'cart',
      JSON.stringify([{ ...product, qty: 1, totalAmount: product.price }, ...cartState.cart])
    );
  }
  return (
    <div className='card w-3xs bg-gray-300 text-primary'>
      <figure>
        <img src={product.image} alt={product.title} width={100} />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{ProductCard.title}</h2>
        <div className='flex'>
          <p>
            <strong>Price:</strong> {product.price}$
          </p>
          <h6 className='text-primary font-bold'>
            <Link to={`/product/${product.id}`}>See more</Link>
          </h6>
        </div>
        {product?.qty > 0 ? (
          <ButtonCounterCart product={product} />
        ) : (
          <button className='btn' onClick={handleClick}>
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
