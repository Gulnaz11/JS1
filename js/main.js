const products = [
    { id: 1, title: 'Notebook', img: "img/notebook.jpg", price: 2000 },
    { id: 2, title: 'Mouse', img: "img/mouse.jpg", price: 20 },
    { id: 3, title: 'Keyboard', img: "img/keyboard.jpg", price: 200 },
    { id: 4, title: 'Gamepad', img: "img/gamepad.jpg", price: 50 },
];
//Функция для формирования верстки каждого товара
//Добавить в выводе изображение
const renderProduct = (products) => {
    return `<div class="product-item">
                <h3>${products.title}</h3>
                <img src="${products.img}" alt="img">
                <p>PRICE: ${products.price} </p>
                <button class="buy-btn">Купить</button>
            </div>`
};
const renderPage = list => {
    const productsList = list.map(item => renderProduct(item));
    console.log(productsList);
    let productsListNew = '';
    for (item of productsList) {
        productsListNew += item;
    }

    document.querySelector('.products').innerHTML = productsListNew;
};

renderPage(products);