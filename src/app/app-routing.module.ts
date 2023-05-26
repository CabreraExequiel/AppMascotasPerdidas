import { RouterModule, Routes } from "@angular/router";
import { InicioComponent } from "./Componentes/inicio/inicio.component";
import { MascotasPerdidasComponent } from "./Componentes/mascotas-perdidas/mascotas-perdidas.component";
import { NgModule } from "@angular/core";
import { MascotasEncontradasComponent } from "./Componentes/mascotas-encontradas/mascotas-encontradas.component";
import { NuevaMascotasComponent } from "./Componentes/nueva-mascotas/nueva-mascotas.component";
import { DonacionesComponent } from "./Componentes/donaciones/donaciones.component";
import { ContactoComponent } from "./Componentes/contacto/contacto.component";


const routes: Routes = [
    { path: 'inicio', component: InicioComponent },
    { path: 'perdidos', component: MascotasPerdidasComponent},
    { path: 'encontrados', component:MascotasEncontradasComponent},
    { path: 'nuevo', component: NuevaMascotasComponent},
    { path: 'donaciones', component: DonacionesComponent},
    { path: 'contacto', component: ContactoComponent}
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }