import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
//Este es un componente hijo y su padre es main-page
export class PersonajesComponent implements OnInit {

  //Hey ya hay un servicio de Dbz inicializado(en el componente main) y quiere usar el mismo 
  //Si el main page iniciara modificacon al servicio todos los componentes hijos recibiria esa informacion personalizada
  constructor(private dbzService:DbzService) { }

  ngOnInit(): void {
  }
  //Con el input le decimos hey estos personajes van a venir del componente padre
  //@Input() personajes:Personaje[] = [];

  //Comunicacion de padre(main-page) a hijo(personajes)

  get personajes(){
    return this.dbzService.personajes;
    // this.dbzService.personajes; es el getter que se declaro en el servicio
  }
}
