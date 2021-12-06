// const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

Vue.component('cart', {
    data(){
      return {
          cartUrl: '/getBasket.json',
          cartItems: [],
          imgCart: 'https://placehold.it/200x150',
      }
    },
    mounted(){
        this.$parent.getJson(`/api/cart`)
            .then(data => {
                for (let item of data.contents){
                    item.imgPath = `img/${item.id_product}.jpg`;
                    this.$data.cartItems.push(item);
                }
            });
    },
    methods: {
        addProduct(item){
                   let find = this.cartItems.find(el => el.id_product === item.id_product);
                   if(find){
                       this.$parent.putJson(`/api/cart/${find.id_product}`, {quantity: 1})
                           .then(data => {
                               if(data.result === 1){
                                   find.quantity++
                               }
                           })
                   } else {
                       const prod = Object.assign({quantity: 1}, item);
                       this.$parent.postJson(`/api/cart`, prod)
                           .then(data => {
                               if(data.result === 1){
                                   this.cartItems.push(prod)
                               }
                           })
            }

            // this.$parent.getJson(`${API}/addToBasket.json`)
            //     .then(data => {
            //         if(data.result === 1){
            //             let find = this.cartItems.find(el => el.id_product === item.id_product);
            //             if(find){
            //                 find.quantity++;
            //             } else {
            //                 const prod = Object.assign({quantity: 1}, item);
            //                 this.cartItems.push(prod)
            //             }
            //         }
            //     })
        },
        remove(item){

        if(item.quantity>1){
         this.$parent.putJson(`/api/cart/${item.id_product}`, {quantity: 1})
                                  .then(data => {
                                          item.quantity--;
                                  })
        }else{
            this.$parent.delJson(`/api/cart/${item.id_product}`,item)
                .then(data => {
               //     if(data.result == 1){
                            this.cartItems.splice(this.cartItems.indexOf(item), 1);
               //             }
                })
}
        },
         cartCount() {
             return this.cartItems.reduce((summ, item) => summ + item.quantity, 0);
           },
           cartSumm() {
             return this.cartItems.reduce((summ, item) => summ + item.quantity*item.price, 0);
           }
    },
    template: `
    <div class="cart-block wrap" >

    <div  v-if=" cartItems.length === 0">Корзина пуста</div>
        <div v-else >
<h2 > {{ this.cartItems.reduce((summ, item) => summ + item.quantity, 0) }} товара(ров) ИТОГО:{{ this.cartItems.reduce((summ, item) => summ + item.quantity*item.price, 0) }}  $</h2>
            <ul class='ul-cart'>

                <cart-item v-for="item of cartItems" :key="item.id_product" :img="item.img_product" :cartItem="item" :cart-count = "cartCount"
                :cart-summ = "cartSumm" @remove="remove" @add-product="addProduct">
                </cart-item>
            </ul>
        </div>
    </div>
    `
});

Vue.component('cart-item', {
    props: ['img', 'cartItem'],
    template: `
    <li class="cart-item li-cart">
        <img class="cartImg" :src="img" alt="Some img" width="100px">
        <div class="product-desc">
            <h3>{{ cartItem.product_name }}</h3>
            <p>Цена: {{ cartItem.price }}</p>
            <div class="changeQuantity">
                <button class="del-btn btnInCart" @click="$emit('remove', cartItem)"> &times; </button>
                <p>&#160;{{ cartItem.quantity }}&#160; шт.&#160; </p>
                <button class="btnInCart" @click="$emit('add-product',cartItem)"> + </button>
            </div>
            <p>Сумма: {{ cartItem.price * cartItem.quantity }}</p>
        </div>
    </li>
    `
})