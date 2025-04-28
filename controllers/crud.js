const conexion = require('../database/db');

// Función para guardar una nueva película
exports.save = (req, res) => {
  // Obtener los datos enviados desde el formulario
  const titulo = req.body.titulo;
  const director = req.body.director;
  const genero = req.body.genero;
  const año = req.body.anio;

  // Insertar la película en la base de datos
  conexion.query("INSERT INTO peliculas SET ?",
    { titulo: titulo, director: director, genero: genero, anio: año },
    (error, results) => {
      if (error) {
        console.error("No se pudo registrar la película", error);
      } else {
        res.redirect('/');  // Redirigir a la página principal después de guardar
      }
    });
};

// Función para actualizar una película existente
exports.update = (req, res) => {
  // Obtener los datos enviados desde el formulario
  const id = req.body.idpelicula;
  const titulo = req.body.titulo;
  const director = req.body.director;
  const genero = req.body.genero;
  const año = req.body.anio;

  // Actualizar la película en la base de datos
  conexion.query("UPDATE peliculas SET ? WHERE idpelicula = ?",
    [{ titulo: titulo, director: director, genero: genero, anio: año }, id],
    (error, results) => {
      if (error) {
        console.error("No se pudo actualizar la película", error);
      } else {
        res.redirect('/');  // Redirigir a la página principal después de actualizar
      }
    });
};
