import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProductsState, CartState } from './contexts';
import { MainLout, CategoriesLayout } from './layouts';
import { Home, CategoriesProducts, ProductDetail, Cart } from './pages';

function App() {
  return (
    <Router>
      <ProductsState>
        <CartState>
          <Routes>
            <Route path='/' element={<MainLout />}>
              <Route path='/' element={<CategoriesLayout />}>
                <Route index element={<Home />} />
                <Route path='/products/:category' element={<CategoriesProducts />} />
              </Route>
              <Route path='/product/:id' element={<ProductDetail />} />
              <Route path='/cart' element={<Cart />} />
            </Route>
          </Routes>
        </CartState>
      </ProductsState>
    </Router>
  );
}

export default App;
