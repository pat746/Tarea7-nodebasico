//router = enrutador (http://miproyecto/rutas)
const express=require('express');
const router= express.Router();
const conexion=require('./database/db')

//enrutador trabajarm GET-POST
//Sintaxis: router.get('RUTA',(req,res)=>{})

//raiz del proyecto: http://miweb.com 
// req: require(requerimiento -INPUT)
//res: results(resultadp -OUPUT)
router.get('/',(req,res)=>{
  conexion.query('SELECT * FROM peliculas',(error,results)=>{
    if(error){
      throw error;
    }else{
      res.render('index',{peliculas: results});
      //res.send(results);

    }
  });
 

});
router.get('/create',(req, res)=>{
  res.render('create');
});

//cuando el usuario decide actualizar 
//debemos identificar la pk y con ella mostrar la vista
router.get('/edit/:idpelicula', (req, res) => {
  conexion.query('SELECT * FROM peliculas WHERE idpelicula = ?', [req.params.idpelicula], (error, results) => {
    if (error){
      throw error;
    }else{
      res.render('edit', { pelicula: results[0] });
      //res.send(results);
    }
  });
});
router.get('/delete/:idpelicula',(req,res)=>{
  conexion.query('DELETE  FROM peliculas WHERE idpelicula = ?', [req.params.idpelicula], (error, results) => {
    if (error){
      throw error;
    }else{
      res.redirect('/');
      //res.send(results);
    }
  });
});
const crud =require('./controllers/crud');
router.post('/save',crud.save);
router.post('/update',crud.update);

module.exports=router;