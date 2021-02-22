import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';


//Modulo creao de por cli  ng g m componentes/heroes
@NgModule({
  //declaratios aqui van los componentes
  declarations: [
    HeroeComponent,
    ListadoComponent,
  ],
  //aqui declaramos que componentes queremos hacer publicos y se puedan utlizar afuera de este modulo, es decir que se puedan utlizar 
  // por ejemplo en el modulo raiz 
  exports:[
    HeroeComponent,
    ListadoComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class HeroesModule { }
