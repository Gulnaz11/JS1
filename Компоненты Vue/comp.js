Vue.component('mycomp', {
    data() {
        return {
            name: "Иван",
            age: 25,
            show: true
        }
    },
    template: `
                <div>
                    <h1 v-show="show">Привет,{{name}}, ваш возраст {{age}} лет</h1>
                    <inner-comp></inner-comp>
                </div>
               `
})

Vue.component('inner-comp', {
    data() {
        return {
            counter: 0
        }
    },
    template: `<div>
                     <button @click="increase($parent.age); $parent.show=!$parent.show">Push {{counter}}</button>
    
              </div>`,
    methods: {
        increase(step) {
            this.counter += step;
        }
    }
})