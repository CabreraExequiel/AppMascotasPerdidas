import { RouterModule, Routes } from "@angular/router";
import { InicioComponent } from "./Componentes/inicio/inicio.component";
import { MascotasPerdidasComponent } from "./Componentes/mascotas-perdidas/mascotas-perdidas.component";
import { NgModule } from "@angular/core";
import { MascotasEncontradasComponent } from "./Componentes/mascotas-encontradas/mascotas-encontradas.component";
import { DonacionesComponent } from "./Componentes/donaciones/donaciones.component";
import { ContactoComponent } from "./Componentes/contacto/contacto.component";
import { LandingPageComponent } from "./Componentes/landing-page/landing-page.component";


const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'inicio', component: InicioComponent },
    { path: 'perdidos', component: MascotasPerdidasComponent},
    { path: 'encontrados', component:MascotasEncontradasComponent},
    { path: 'donaciones', component: DonacionesComponent},
    { path: 'contacto', component: ContactoComponent}
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }