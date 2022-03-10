import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Libro } from '../models/libro';
import { LibroService } from '../shared/libro.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {

  
  public libros:Libro[];
  public libro:Libro;

  constructor(public libroService:LibroService,private toast:ToastController) {

    this.libroService.getAll().subscribe((datos:any)=>{
      this.libros = datos.resultado;
    });
    this.libro = new Libro("","Tapa Dura","",null,"",null,6);
  }
  public guardarLibro(form:NgForm):void{
   
    this.libroService.add(this.libro).subscribe((datos:any)=>{
      this.toast.create(datos.mensaje)
      this.libro.id_libro = datos.resultado;
      this.libros.push(this.libro);
      console.log(this.libros);
    });
}

public modificarLibro(form:NgForm):void{
console.log(this.libro);
this.libroService.edit(this.libro).subscribe((datos:any)=>{
  this.toast.create(datos.mensaje)
  for(let atributo in this.libros){
    if(this.libros[atributo].id_libro==this.libro.id_libro){
      this.libros[atributo] = this.libro;
    }
  }
});
}

public borrarLibro(idLibro:number):void{
this.libroService.delete(idLibro).subscribe((datos:any)=>{
  let contador = 0;
  this.libros.forEach((libro)=>{
    this.toast.create(datos.mensaje)
    if(libro.id_libro === idLibro){
      this.libros.splice(contador,1);
    }else{
      contador++;
    }
  })
});
}

  ngOnInit() {
  }

}
