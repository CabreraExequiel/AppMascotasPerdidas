import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './Componentes/home/home.component';
import { NavBarComponent } from './ComponentesReutilizables/nav-bar/nav-bar.component';
import { FormComponent } from './ComponentesReutilizables/form/form.component';
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { MascotasPerdidasComponent } from './Componentes/mascotas-perdidas/mascotas-perdidas.component';
import { MascotasEncontradasComponent } from './Componentes/mascotas-encontradas/mascotas-encontradas.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    FormComponent,
    InicioComponent,
    MascotasPerdidasComponent,
    MascotasEncontradasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
