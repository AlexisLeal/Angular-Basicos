import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  heroes:string[] = ['Iron Man','SpiderMan','Thor','Hulk'];
  heroeBorrado:string;
  borrado:boolean = false;


  borrarHeroe(){
    this.heroeBorrado = this.heroes.shift();
    if(this.heroeBorrado == null){
      this.borrado = false;
    }else{
      this.borrado = true;
    }
   
  }

}
