"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pelicula = void 0;
class Pelicula {
    constructor(id, titulo, director, year, genero, sinopsis, estreno) {
        this.id = id;
        this.titulo = titulo;
        this.director = director;
        this.year = year;
        this.genero = genero;
        this.sinopsis = sinopsis;
        this.estreno = estreno;
        this.id = id;
        this.titulo = titulo;
        this.director = director;
        this.year = year;
        this.estreno = estreno;
        this.genero = genero;
        this.peliculas = [{
                id,
                titulo,
                director,
                estreno,
                genero,
                sinopsis
            }];
    }
    setPelicula(pelicula) {
        this.peliculas = [...this.peliculas, pelicula];
    }
    getPeliculas() {
        return this.peliculas;
    }
}
exports.Pelicula = Pelicula;
