const DEFAULT_IMAGE = 'https://theslide.ru/img/thumbs/2daedf1a87c5fdd74c6b583e95adde83-200x.jpg';

class Products {
    constructor(container = `.products`) {
        this.container = container;
        this.data = [];
        this.allProduct = [];
        this.init();
    }
    init() {
        this._fetchProducts();
        this._render();
    }

    _fetchProducts() {
        this.data = [
            { id: 1, title: 'Notebook', price: 2000 },
            { id: 2, title: 'Mouse', price: 15 },
            { id: 3, title: 'Keyboard', price: 500 },
            { id: 4, title: 'Gamepad', price: 70 },
        ];
    }

    _render() {
        const block = document.querySelector(this.container);
        for (let item of this.data) {
            const product = new ProductItem(item);
            this.allProduct.push(product);
            block.insertAdjacentHTML('beforeend', product.render());
        }
    }
    totalPrice() {
        let totalPrice = 0;
        for (let item of this.data) {
            if (typeof (item.price) == 'number') {
                totalPrice += item.price;
            }
        }
        return totalPrice;
    }
}

class ProductItem {
    constructor(item) {
        this.id = item.id;
        this.title = item.title;
        this.price = item.price;
        if (item.image) {
            this.image = 'img/' + item.image;
        } else {
            this.image = DEFAULT_IMAGE;
        }

    }

    render() {
        //console.log(this);
        return `<div class="product-item">
                    <img src="${this.image}" alt="" class="product-item__img">
                    <h3>${this.title}</h3>
                    <p>${this.price ? this.price : 'Цена не указана'} ${typeof (this.price) == 'number' ? 'р.' : ''}</p>
                    <button class="buy-cart-button">Купить</button>
                </div>`
    }
}

const products = new Products();
console.log(products.totalPrice());

// class Cart {
//     constructor() {
//         this.items //Массив с товарами добавленными в корзину (объекты класса CartItem)
//         this.totalPrice //Общая стоимость корзины
//         this.totalCount //Общее кол-во товаров в корзине
//     }
//     render() {} // Во время рендера подсчитывается общее кол-во и стоимость товаров, а так же удаляются из массива элементы, чей count = 0.
//     clear() {} //Метод для очистки корзины
//     addItem() {} //Добавление новой позиции в корзину
//     deleteItem() {} //Удаление позиции из корзины
// }

// class CartItem() {
//     constructor(item) { //Конструктор принимает ссылку на экземпляр класса ProductItem
//         this.link = item //Ссылка на экземпляр класса
//         this.count = 1; //Количество данного товара в корзине
//     }
//     plusCount() {} //Увеличение кол-ва на единицу
//     minusCount() {} //Уменьшение кол-ва на единицу
// }