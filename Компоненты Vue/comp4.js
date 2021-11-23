Vue.component('mycomp', {
    data() {
        return {
            name: "Иван",
            age: 25
        }
    },
    template: `<div>
               
                    <h1>Привет,{{name}}</h1>
                    <h2>Добрый день,{{$parent.name1}}</h2>
                   <!-- <inner-comp  :age="age"></inner-comp> -->
                   <inner-comp ></inner-comp> 
                     <button @click="$parent.test(age)">ok</button> 
                </div>
        
               `
})

Vue.component('inner-comp', {
    // props: ['age'],
    template: `
             <div>Пользователю {{$root.name2}} {{$parent.age}} лет</div>
    `
})