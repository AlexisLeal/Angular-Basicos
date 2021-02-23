import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

 // personajes:Personaje[] = [];

 
/*
  // esto que acabamos de hacer private dbzService:DbzService se le conoce como inyecion de dependecias
  // Estamos inyectacdo el servicio en este componenten 
  constructor(
    private dbzService:DbzService
  ) { 
    //le asignamos el valor de personajes del servicio a personajes que creamos
    //this.personajes = this.dbzService.personajes
  }

  /*
  get personajes():Personaje[]{
   return this.dbzService.personajes
 }


  */
 constructor() {}



  ngOnInit(): void {
  }


/*
  TODA ESTA INFORMACION DEBE ESTAR EN UN SERVICIO 
  personajes:Personaje[] = [
    {
      nombre:"Goku",
      poder:15000
    },
    {
      nombre:"Vegeta",
      poder:14500
    }
  ];
  */


/*
  nuevo:Personaje = {
    nombre:"",
    poder:0,
    
  }

  
  agregar(){
    if(this.nuevo.nombre.trim().length === 0){return;}

    this.personajes.push(this.nuevo);
    console.log(this.nuevo);
    
    //Reiniciamos el objeto tiene que hacer de esta forma si no no funciona 

    this.nuevo={
      nombre:"",
      poder:0
    }
  }
*/
/*
  //para el Output
  agregarNuevoPersonaje(personaje:Personaje){
   // console.log("Hey!!");
    //console.log(personaje);
    this.personajes.push(personaje);

    }
*/
 }
