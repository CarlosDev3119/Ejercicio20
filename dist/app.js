"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const peliculas_1 = require("./classes/peliculas");
const elPadrino = {
    id: 2,
    titulo: 'El padrino 2',
    director: 'Francis Ford Coppola',
    estreno: 1974,
    genero: 'Drama',
    sinopsis: 'La historia de una familia de la mafia siciliana.'
};
const pelicula = new peliculas_1.Pelicula(1, 'El padrino', 'Francis Ford Coppola', 1972, 'Drama', 'La historia de una familia de la mafia siciliana.', 1974);
pelicula.setPelicula(elPadrino);
console.log(pelicula.getPeliculas());
