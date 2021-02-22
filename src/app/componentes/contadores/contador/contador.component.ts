import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  title:string = 'Contador App';

  contador:number = 0;
  contadorBase:number = 0;

  base:number = 5;
  
  sumar():void{
    this.contador += 1;

  }
  restar():void{
    this.contador -= 1;

  }
  acomular(valor:number){
    this.contador += valor;
  }
  acomuladorBase(base:number):void{
    this.contadorBase += base;

  }


}
