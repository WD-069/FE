import { useParams } from "react-router-dom"
import { ProductCard } from "../components";
import { useProducts } from "../contexts";

function CategoriesProducts() {
  const {category} = useParams()
  const {products} = useProducts()
  const productsByCategory = products.filter((product) => category === product.category);
  return (
    <div className='flex flex-wrap justify-items-center gap-3 p-3'>
      {productsByCategory.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}

export default CategoriesProducts