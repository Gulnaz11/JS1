const express =require('express');
const app= express();//app- это объект , с помощью  которого можно обрабатывать запросы  на сервер

app.listen(3000,()=>{
   console.log("СВязь  сервером утсановлена");
})

app.get('/',(req,res)=>{
    res.send('ОТвет от сервера..');
});

