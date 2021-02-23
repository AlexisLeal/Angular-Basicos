import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  constructor(private dbzService:DbzService) { }

  ngOnInit(): void {
  }

  nuevo:Personaje = {
    nombre:"",
    poder:0,
  }
  //@Input()personajes:Personaje[] = [];

  //el componente output  es utilizado cuando tenemos un componente hijo y ese componente hijo necesita emitir un valor al padre
  //es como cualquier otro evento 

  //@Output() onNuevoPersonaje:EventEmitter<Personaje> = new EventEmitter();
  //SIRVE PARA EMITIR EVENTOS y siempre debemos especificar el tipo 




  agregar(){
    if(this.nuevo.nombre.trim().length === 0){return;}

   // this.personajes.push(this.nuevo); se utlizo para el input 
    //console.log(this.nuevo);

    //this.onNuevoPersonaje.emit(this.nuevo);
    //acepta perfectamente this.nuevo por que es de tipo Personaje
    //lo que hacemos aqui es que lo enviamos 
    // cuando tenemos todo listo este -> emit(this.nuevo); es el momento para emitir el evento
    
    //utlizamos el servicio 

    this.dbzService.agregarPersonaje(this.nuevo);
    //Reiniciamos el objeto tiene que hacer de esta forma si no no funciona 
    this.nuevo={
      nombre:"",
      poder:0
    }
  }

  

}
