import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';


//Los servicios en angular son muy parecidos para trabajar en sigleton osea una clase que es instanacia de manera global en nuestra aplicaion 
// el servicio mantiene actualizada la informacion sin importar en donde estemos 

//El decorador hace la diferencia y nos indica que es un servicio el @injectable
//Nos dice que es una clase que se puede inyectar 
@Injectable({
  providedIn: 'root'
})
export class DbzService {
  //NOTA LOS SERVICIO VENDRIAN SIENDO COMO LOS HELPER DE CODEIGNITER

  //Este servicio solo se va ejecutar hasta que alguien lo requiera y se crear la primera instancia 
  // despues de haberse creado va a ser la misma instancia para cualquier componente, servivee, pipel  que lo consuma 
  constructor() { 
    console.log("Servicio inicializado");
  }

  /*
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

//La hacemos privadad
private _personajes:Personaje[] = [
  {
    nombre:"Goku",
    poder:15000
  },
  {
    nombre:"Vegeta",
    poder:14500
  }
];

get personajes():Personaje[]{
  return [...this._personajes];
  //[..] rompe la referencia con los personajes 
}

agregarPersonaje(nuevoPersonaje:Personaje){
  this._personajes.push(nuevoPersonaje);
}

}
