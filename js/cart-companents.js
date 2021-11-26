Vue.component('cart', {
    props: ['cart'],
    template: `
    
    <div class="bascket" >
    <p v-if="!cart.length" class="totalSum">В корзине пусто</p>
       <cartProduct v-for="item of cart" :cartProduct='item' :key="item.id_product">   
       </cartProduct>
      
</div>
    
    `
})

Vue.component('cartProduct', {
    props: ['cartProduct'],
    template: `
    <div class="desc">
       <h3 class="product_name">{{cartProduct.product_name}}</h3>
       <p class="product_price">{{cartProduct.price}} $</p>
       <p> Количество: {{cartProduct.quantity}}</p>
       <button @click="$root.remove(cartProduct)">Х</button>      
    </div>
    
           
    `
})

//<p v-if="!cartProducts.length" class="totalSum">В корзине пусто</p>