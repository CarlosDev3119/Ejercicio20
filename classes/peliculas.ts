
export type PeliculaType = {
    id: number;
    titulo: string;
    director: string;
    estreno: number;
    genero: string;
    sinopsis: string;
}

export class Pelicula {

    public peliculas: PeliculaType[];

    constructor(
        public id: number,
        public titulo: string,
        public director: string,
        public year: number,
        public genero: string,
        public sinopsis: string,
        public estreno: number
        
    ) { 
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

    public setPelicula(pelicula: PeliculaType) {
        this.peliculas = [ ...this.peliculas, pelicula ];
    }

    public getPeliculas() {
        return this.peliculas;
    }

}