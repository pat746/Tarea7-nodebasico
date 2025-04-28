const mysql = require('mysql');
const conexion = mysql.createConnection({
  hots : 'localhost',
  user: 'root',
  password: '',
  database:'ListadoDePeliculas'
});
//cuando no hay errores , error = null
conexion.connect((error)=>{
  if(error){
    console.log("error en la conexion",error);
    return;//fin 
 }
 console.log("conectado correctamente");
});
//exportacion conexion
module.exports=conexion;