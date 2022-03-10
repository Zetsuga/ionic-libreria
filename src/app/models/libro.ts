export class Libro {

    public id_libro: number
    public id_usuario: number
    public titulo: string
    public tipo: string
    public autor: string
    public precio: number
    public foto: string

    constructor(titulo: string,tipo: string,autor: string,precio: number,
        foto: string,id_libro = 0 ,id_usuario = 0){
            this.id_libro = id_libro;
            this.id_usuario =  id_usuario;
            this.titulo = titulo;
            this.tipo = tipo;
            this.autor = autor;
            this.precio = precio;
            this.foto = foto;
        }
        
}
