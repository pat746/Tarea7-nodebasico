CREATE DATABASE ListadoDePeliculas;

USE ListadoDePeliculas;

-- tabla peliculas 
CREATE TABLE peliculas (
    idpelicula INT AUTO_INCREMENT PRIMARY KEY,  -- Identificador único para cada película
    titulo VARCHAR(255) NOT NULL,                -- Título de la película
    director VARCHAR(255) NOT NULL,              -- Nombre del director de la película
    genero VARCHAR(100),                         -- Género de la película
    anio INT                                     -- Año de estreno de la película
)ENGINE = INNODB;

INSERT INTO peliculas (titulo, director, genero, anio) VALUES
('El Padrino', 'Francis Ford Coppola', 'Crimen, Drama', 1972),
('La Guerra de las Galaxias', 'George Lucas', 'Ciencia Ficción, Aventura', 1977),
('Forrest Gump', 'Robert Zemeckis', 'Drama, Comedia', 1994),
('El Señor de los Anillos: La Comunidad del Anillo', 'Peter Jackson', 'Aventura, Fantasía', 2001);