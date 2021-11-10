class ProductList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this._fetchProducts();
        this.sumAll();
        this.render();//вывод товаров на страницу

    }
    _fetchProducts() {
        this.goods = [
            { id: 1, title: 'Notebook', img: "img/notebook.jpg", price: 2000 },
            { id: 2, title: 'Mouse', img: "img/mouse.jpg", price: 20 },
            { id: 3, title: 'Keyboard', img: "img/keyboard.jpg", price: 200 },
            { id: 4, title: 'Gamepad', img: "img/gamepad.jpg", price: 50 },
        ];
    }

    sumAll() {
        let sum = 0;
        this.goods.forEach(good => sum += good.price);
        return sum;
    }

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const item = new ProductItem(product);
            block.insertAdjacentHTML("beforeend", item.render());
            //           block.innerHTML += item.render();
        }
    }
}

class ProductItem {
    constructor(product) {
        this.title = product.title;
        this.id = product.id;
        this.price = product.price;
        this.img = product.img;
    }
    render() {
        return `<div class="product-item">
        <img src="${this.img}" alt="img">
                <h3>${this.title}</h3>
                <p>${this.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
    }
}


class Cart {
    constructor(product, count = 0) {
        this.title = product.title;
        this.id = product.id;
        this.price = product.price;
        this.img = product.img;
        this.count = count;
        this.render();
        this.priceAll();

    }
}

let list = new ProductList();


// const products = [
//     { id: 1, title: 'Notebook', img: "img/notebook.jpg", price: 2000 },
//     { id: 2, title: 'Mouse', img: "img/mouse.jpg", price: 20 },
//     { id: 3, title: 'Keyboard', img: "img/keyboard.jpg", price: 200 },
//     { id: 4, title: 'Gamepad', img: "img/gamepad.jpg", price: 50 },
// ];
// //Функция для формирования верстки каждого товара
// //Добавить в выводе изображение
// const renderProduct = (products) => {
//     return `<div class="product-item">
//                 <h3>${products.title}</h3>
//                 <img src="${products.img}" alt="img">
//                 <p>PRICE: ${products.price} </p>
//                 <button class="buy-btn">Купить</button>
//             </div>`
// };
// const renderPage = list => {
//     const productsList = list.map(item => renderProduct(item));
//     let productsListNew = '';
//     for (item of productsList) {
//         productsListNew += item;
//     }

//     document.querySelector('.products').innerHTML = productsListNew;
// };

// renderPage(products);