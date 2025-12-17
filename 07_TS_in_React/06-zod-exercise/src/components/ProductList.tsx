import { useEffect, useState } from "react";
import z from "zod";
import { ProductSchema } from "../schema/products";
import type { Product } from "../types";

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>();
  const [errors, setErrors] = useState<string[] | null>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products");
        const d = await res.json();

        const fetchedProducts = [];
        const productError = [];

        for (const product of d.products) {
          const { success, data, error } = ProductSchema.safeParse(product);

          if (success) {
            fetchedProducts.push(data);
          } else {
            productError.push(z.prettifyError(error));
          }
        }

        setProducts(fetchedProducts);
        setErrors(productError);
        // console.log(data);
      } catch (err) {
        if (err instanceof Error) {
          setErrors([err.message]);
        }
      }
    };

    fetchData();
  }, []);

  console.log(products);
  console.log(errors);

  return (
    <div>
      {/* <p style={{ textAlign: "center" }}>{products?.title}</p> */}
      {errors && (
        <p style={{ textAlign: "center", color: "crimson" }}>{errors}</p>
      )}
    </div>
  );
};
export default ProductList;
