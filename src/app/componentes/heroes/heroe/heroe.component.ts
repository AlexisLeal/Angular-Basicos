import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  nombre:string = "Iron Man";
  edad:number = 45;

  obtenerNombre():string{
    return this.nombre + " " + this.edad;
  }
  //Si nos damos cuenta es un getter no una funcion en si 
  get nombreCapitalizado():string{
    return this.nombre.toUpperCase();
  }
  cambiarNombre():void{
    if(this.nombre == "Iron Man"){
      this.nombre= "SpiderMan";
    }else{
      this.nombre= "Iron Man";
    }
  }
  cambiarEdad():void{
    if(this.edad == 45){
      this.edad = 18;
    }else{
      this.edad =45;
    }
    
  }

}
