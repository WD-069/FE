export const fetchCategories = async(setCategories, setError) => {
    try {
        const res = await fetch('https://fakestoreapi.com/products/categories');
        if (!res.ok) {
          throw new Error('Failed to fetch!');
        }
        const data = await res.json();
        setCategories(data);
    } catch (err) {
      // setError(err);
    }
}