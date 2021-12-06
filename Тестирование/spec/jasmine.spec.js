describe('Соответсвие значений',()=>{
     it('Проверка на соответсвие значения перемнной x значению 10',()=>{
          let x=5+5;
          expect(x).toBe(10);
     });
     it('Проверка на соответсвие значения перемнной x значению 10',()=>{
               let x=2+5;
               expect(x).toBe(7);
          })
});

describe('Дополнительные функции тестировнания',()=>{
     it("Тестироание объектов",()=>{
           let test=()=>{};
           let user1={
               name:"Иван",
               age:26,
               go: test
           };
            let user2={
                          name:"Иван",
                          age:26,
                          go: test
                      };
           expect(user1).toEqual(user2);
     });

     it("RegExp",()=>{
          let text="Test ABCD jasmine";
          expect(text).toMatch(/ABCd/i);
     });
     it('Arrays',()=>{
           let arr=['one','two'];
           expect(arr).toContain('two');
     })
})