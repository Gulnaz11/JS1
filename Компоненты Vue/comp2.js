Vue.component('mycomp', {
    data() {
        return {
            name: "Иван",
            year: 1990,
            show: true
        }
    },
    template: `<div>
                <div>
                    <h1>Привет,{{name}}, вы родились {{year}} году</h1>
                    <inner-comp></inner-comp>
                </div>
                <div>
                    <h1>Привет,{{name}}, ваш возраст {{ new Date().getFullYear()-year }} лет</h1>
                    <inner-comp></inner-comp>
                </div>
                </div>
               `
})

