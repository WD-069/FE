import {Link} from "react-router-dom";
import { useEffect } from "react";
import { fetchCategories } from "../fetch/fetchCategories";
import { useProducts } from '../contexts/ProductsContext';

function Categories() {
  const {categories, setCategories, error, setError} = useProducts()
  
    useEffect(() => {
        fetchCategories(setCategories, setError);
    }, [])
  return (
    <nav className='navbar'>
      <ul className='menu menu-horizontal items-center gap-2 px-1'>
        {categories &&
          categories.map((category) => (
            <li className="border rounded-md border-gray-400 hover:border-gray-100" key={category}>
              <Link to={`/products/${category}`}>{category}</Link>
            </li>
          ))}
      </ul>
    </nav>
  );
}

export default Categories