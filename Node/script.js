//const c=require('./func');
//
//console.log(c.func.a(10));
//console.log(c.func.b(10));
//
//const os=require('os');
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