const products = [
    { id: 1, title: 'Notebook', price: 2000 },
    { id: 2, title: 'Mouse', price: 15 },
    { id: 3, title: 'Keyboard', price: 500 },
    { id: 4, title: 'Gamepad', price: 70 },
];

const renderProduct = (product, img = 'https://theslide.ru/img/thumbs/2daedf1a87c5fdd74c6b583e95adde83-200x.jpg') => {
    return `<div class="product-item">
    <img src="${img}">
    <h3>${product.title}</h3>
    <p>${product.price}</p>
    <button class="buy-btn">Купить</button>
    </div>`;
};

const renderPage = list => {
    document.querySelector('.products').innerHTML = (list.map(product => renderProduct(product))).join('');
};

renderPage(products);