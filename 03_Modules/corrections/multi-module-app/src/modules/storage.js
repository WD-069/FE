export function addToLocalStorage(value) {
    const data = JSON.parse(localStorage.getItem('products')) || [];
    data.push({ ...value, amount: 0 });
    localStorage.setItem('products', JSON.stringify(data));
}
