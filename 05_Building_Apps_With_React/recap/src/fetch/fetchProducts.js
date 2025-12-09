export const fetchProduts = async (setProducts, setError) => {
    try{
        const res = await fetch('https://fakestoreapi.com/products');
        if(!res.ok) {
            throw new Error("Failed to fetch!")
        }
        const data = await res.json()
        setProducts(data);
    }catch(err) {
        setError(err)
    }
}

export const fetchProductById = async(setProduct, id, setError) => {
    try {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      if (!res.ok) {
        throw new Error('Failed to fetch!');
      }
      const data = await res.json();
      setProduct(data);
    } catch (err) {
      setError(err);
    }
}