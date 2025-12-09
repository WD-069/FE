import {useParams} from "react-router-dom"
import { useProducts } from "../contexts";

function ProductDetail() {
    const {id} = useParams();
    const {products} = useProducts();
    const product = products.find((p) => p.id == id)
    console.log(product)
  return product && (
    <div>
        <h2>{product.title}</h2>
        <div>
            <figure>
                <img src={product.image} alt={product.title} width={200} />
            </figure>
            <div className="flex flex-col gap-2">
                <div className="flex justify-around">
                    <p><strong>Price:</strong> {product.price}$</p>
                    <p><strong>Rating: {product.rating.rate}</strong></p>
                </div>
                <p>{product.description}</p>
            </div>
        </div>
        
    </div>
  )
}

export default ProductDetail