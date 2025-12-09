import { useState } from "react"
import { ProductsContext } from "./ProductsContext";

function ProductsState({children}) {
      const [products, setProducts] = useState([]);
      const [product, setProduct] = useState({});
      const [categories, setCategories] = useState([]);
      const [error, setError] = useState(null);
      const [loading, setLoading] = useState(true);

  return <ProductsContext value={{products, setProducts, product, setProduct, categories, setCategories, error, setError, loading, setLoading }}>{children}</ProductsContext>
}

export default ProductsState