import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { NavBarComponent } from './ComponentesReutilizables/nav-bar/nav-bar.component';
import { FormComponent } from './ComponentesReutilizables/form/form.component';
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { MascotasPerdidasComponent } from './Componentes/mascotas-perdidas/mascotas-perdidas.component';
import { MascotasEncontradasComponent } from './Componentes/mascotas-encontradas/mascotas-encontradas.component';
import { AppRoutingModule } from './app-routing.module';
import { DonacionesComponent } from './Componentes/donaciones/donaciones.component';
import { ContactoComponent } from './Componentes/contacto/contacto.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FormComponent,
    InicioComponent,
    MascotasPerdidasComponent,
    MascotasEncontradasComponent,
    DonacionesComponent,
    ContactoComponent,
 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
