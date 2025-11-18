import { fetchProducts } from './modules/network';
import { addToLocalStorage } from './modules/storage';
import { createProductCard } from './modules/ui';
import { productContainer } from './modules/ui';

document.addEventListener('DOMContentLoaded', () => {
    main();
});

async function main() {
    const products = await fetchProducts();

    console.log(products);

    products.forEach((product) => {
        const productCard = createProductCard(product);
        productContainer.appendChild(productCard);
    });

    productContainer.addEventListener('click', (event) => {
        if (event.target.tagName == 'BUTTON') {
            const id = event.target.dataset.id;

            const clickedProduct = products.find((product) => product.id == id);
            console.log(clickedProduct);

            addToLocalStorage(clickedProduct);
        }
    });
}
