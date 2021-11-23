Vue.component('mycomp', {
    props: ['x', 'name', 'title'],
    data() {
        return {
            name: "Иван",
            year: 1990,
            show: true
        }
    },
    template: `<div>
               
                    <h1>Привет,{{$data.name}}, вы родились {{year}} году</h1>
                    <h2>Парматеры , которые поступили из верстки: x={{x}}, title={{title}},name={{name}}</h2>
                </div>
        
               `
})

