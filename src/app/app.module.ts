import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadoresModule } from './componentes/contadores/contadores.module';
//import { ContadorComponent } from './componentes/contadores/contador/contador.component';
import { HeroesModule } from './componentes/heroes/heroes.module';
//import { HeroeComponent } from './componentes/heroes/heroe/heroe.component';
//import { ListadoComponent } from './componentes/heroes/listado/listado.component';
//GRACIAS A LOS MODULOS podemos tener mejor extructaracion de nuestro proyecto y solo declara modulos aqui y no componentes
@NgModule({
  //aqui van los componentes 
  declarations: [
    AppComponent,
    //ContadorComponent,
   // HeroeComponent,
    //ListadoComponent,
  ],
  //Aquie van los modulos 
  imports: [
    BrowserModule,
    HeroesModule,
    ContadoresModule,
  ],
  //en providers van los servicios
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
