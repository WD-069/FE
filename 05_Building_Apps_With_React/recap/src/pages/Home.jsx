import { fetchProduts } from '../fetch/fetchProducts';
import { useEffect } from 'react';
import { ProductCard } from '../components';
import { useProducts } from '../contexts';

function Home() {
  const {products, error, loading} = useProducts()
  return (
    <div className='flex flex-wrap justify-items-center gap-3 p-3'>
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}

export default Home;
