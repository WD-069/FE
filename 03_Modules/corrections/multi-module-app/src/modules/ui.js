export const productContainer = document.querySelector('#products');

const cardTemplate = document.querySelector('#productCard');

export function createProductCard(product) {
    const cardClone = cardTemplate.content.cloneNode(true);

    const title = cardClone.querySelector('#title');
    const img = cardClone.querySelector('img');
    const description = cardClone.querySelector('#description');
    const price = cardClone.querySelector('#price');
    const button = cardClone.querySelector('button');

    title.textContent = product.title;
    img.src = product.image;
    description.textContent = product.description;
    price.textContent = product.price;

    button.dataset.id = product.id;
    return cardClone;
}
