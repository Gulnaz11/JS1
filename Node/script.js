//const c=require('./func');
//
//console.log(c.func.a(10));
//console.log(c.func.b(10));
//
//const os=require('os');  //импортируем модуль os
//console.log(os.type());

//Работа с файлами

//const fs=require("fs");
//let users=[{'name':'Иван', 'id':10}];
//
//
//fs.readFile('Node/test.json','utf-8',(err,data)=>{//data-это то, что мы считали из файла
//    if(err){
//         console.log(err);
//    }else{
//        let users=JSON.parse(data);
//        let user='{"name":"Петр","id":15}';
//        users.push(JSON.parse(user));
//        fs.writeFile('Node/test.json',JSON.stringify(users),err=>{
//            if(err){
//                console.log(err);
//            }
//        });
//    }
//}
//)

//Внешние модули
//const moment=require('moment');
//console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));

const http= require('http');

//модуль http служит для обработки запросов на стороне сервера
//Запросы поступают по протоколу http
//Протокол http работает с методами(GET, POST , PUT,DELETE)
//GET-ИСПОЛЬЗУЕТСЯ ДЛЯ получения данных от сервера
//POST- используется для вставки данных на сервере
//PUT- обновление данных на стороне сервера
//DELETE- удаление данных

const server=http.createServer((req,res)=>{
//req-объект, с помощью которого можно получить данные, которые отправил клиент
//res-объект, с помощью которого можно отправить данные от сервера к клиенту
   if (req.url=='/'){
        res.write("WELCOME");
        res.end();
   }

});

server.on('connection',socket=>{
      console.log("Соединение установлено");

});

server.listen('3000');
