Vue.component('error', {
    props: ['error'],
    template: `
    <div v-if=error>
       <h1>Не удалось выполнить запрос к серверу</h1>
       </div>
    
    `
})
