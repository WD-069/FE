// components/ProductList.tsx
// This component should receive a `products` array where each product has an `id` (number) and `title` (string)

// # Type Definitions
// * Define the shape of a single product object
type Product = {
  id: number;
  title: string;
};

type ProductListProps = {
  // * Define the prop as an array of Product objects
  products: Product[];
};

const ProductList = ({ products }: ProductListProps) => {
  return (
    <ul>
      {/* # List Rendering */}
      {/* * Using .map() to transform data array into an array of JSX elements */}
      {/* ! Always provide a unique 'key' prop for list items to help React optimize updates */}
      {products.map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </ul>
  );
};

export default ProductList;
