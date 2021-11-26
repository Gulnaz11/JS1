Vue.component('products', {
    props: ['products', 'error'],
    template: `
    
<div  class="product-item" v-if=!error>
    
    <product  v-for="item of products"  :product="item">
    </product>
    
</div>
    
    `
})

Vue.component('product', {
    props: ['product'],
    template: `
    <div class="desc">
 
         <img :src="$root.imgCatalog" alt="Some img">
        <h3 class="product_name">{{ product.product_name }}</h3>
        <p class="product_price">{{ product.price }} $</p>
        <button class="buy-btn" @click="$parent.$emit('add-product', product)">Купить</button>
    </div>
           
    `
})
//:id=$parent.product.id_product