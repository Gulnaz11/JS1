
let a = true;

document.querySelector("button").addEventListener('click', () => {
    if (a) {

        document.getElementById('cart').className = "cart visible";
        a = false;
    } else {

        document.getElementById('cart').className = "cart invisible";
        a = true;
    }
})

const API = "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/";

class ProductList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this._fetchProducts()
            .then(data => {
                this.goods = data;
                this.sumAll();
                this.render();//вывод товаров на страницу

            })

    }
    _fetchProducts() {
        return fetch(`${API}catalogData.json`)
            .then(api => api.json())
            .catch(error => alert("ERROR"));

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
        this.title = product.product_name;
        this.id = product.id;
        this.price = product.price;
        // this.img = product.img;
    }
    render() {
        return `<div class="product-item">
         <img src="img/img.jpg" alt="img">
                <h3>${this.title}</h3>
                <p>${this.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
    }
}




let list = new ProductList();

class Cart {
    constructor(container = '.bascket') {
        this.container = container;
        this.goods = [];
        this._fetchProducts()
            .then(data => {
                this.goods = data.contents;

                this.render();//вывод товаров на страницу
                this.sumAll();
            })

    }
    _fetchProducts() {
        return fetch(`${API}getBasket.json`)
            .then(api => api.json())
            .catch(error => alert("ERROR"));

    }

    sumAll() {
        let sum = 0;
        this.goods.forEach(good => sum += good.price);
        console.log(sum);
        document.getElementsByClassName("totalSum")[0].innerHTML = `Итого: ${sum}`;
    }

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const item = new CartItem(product);
            block.insertAdjacentHTML("afterbegin", item.render());
            //           block.innerHTML += item.render();
        }
    }
}

class CartItem {
    constructor(product) {
        this.title = product.product_name;
        this.id = product.id;
        this.price = product.price;
        this.quantity = product.quantity;
        // this.img = product.img;
    }
    render() {
        return `<div class="cart-item">
         <img class="cart-img" src="img/img.jpg" alt="img">
                <h3>${this.title}</h3>
                <p>Колличество: ${this.quantity} </p>
               <p> Цена: ${this.price} </p>
            </div>`
    }
}
let list2 = new Cart();



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