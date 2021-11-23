const app = new Vue({
    el: "#app",
    data: {
        name1: "Игорь",
        name2: "Анна"
    },
    methods: {
        test(x) {
            alert(`Имя пользователя - ${this.name1}, возраст ${x}`)
        }
    }
})