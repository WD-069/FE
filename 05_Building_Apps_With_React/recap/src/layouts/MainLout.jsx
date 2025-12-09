import { Outlet } from 'react-router-dom';
import { Navbar, Categories } from '../components';
import { useEffect } from 'react';
import { useProducts } from '../contexts';
import { fetchProduts } from '../fetch/fetchProducts';

function MainLout() {
  const {setProducts, setError} = useProducts();

  useEffect(() => {
    fetchProduts(setProducts, setError);
  }, []);

  return (
    <div className=''>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default MainLout;
