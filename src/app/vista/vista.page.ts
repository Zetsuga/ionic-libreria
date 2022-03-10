import { Component, OnInit } from '@angular/core';
import { Libro } from '../models/libro';
import { LibroService } from '../shared/libro.service';

@Component({
  selector: 'app-vista',
  templateUrl: './vista.page.html',
  styleUrls: ['./vista.page.scss'],
})
export class VistaPage implements OnInit {

  public libros:Libro[];
  public libro:Libro;

  constructor(public libroService:LibroService) {
    this.libroService.getAll().subscribe((datos:any)=>{
      this.libros = datos.resultado;
    });
   }

  public buscarLibro(id_libro:string):void{
    if(id_libro == ""){
      this.libroService.getAll().subscribe((datos:any)=>{
          this.libros = datos.resultado;
      }); 
    }else{
      this.libroService.getOne(Number(id_libro)).subscribe((datos:any)=>{

        if(datos.resultado.length>0){
          this.libros = [datos.resultado[0]];
        }else{
          this.libros = []
        }
      });
    }
  }

  ngOnInit() {
  }

}
