//express = framework js backend 
const express = require ('express');
const app = express();//framework

//definir u motor
app.set('view engine','ejs');
//configuracion 
app.use(express.urlencoded({extended: false}));
app.use(express(express.json));
//incorporar muestro enrutador 
app.use('/', require('./router'))

//servidor local de prueba
app.listen(5000 ,  ()=>{
  console.log("Servidor ejecutado http://localhost:5000");
})



 