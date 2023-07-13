import { Component, OnInit } from '@angular/core';
import { ApiMascotasService } from 'src/app/Servicios/api-mascotas.service';

@Component({
  selector: 'app-mascotas-encontradas',
  templateUrl: './mascotas-encontradas.component.html',
  styleUrls: ['./mascotas-encontradas.component.css']
})
export class MascotasEncontradasComponent implements OnInit {

loggedIn = false;

  constructor(private datosApi: ApiMascotasService) { }
  adopcion: any;

  ngOnInit(): void {
    this.datosApi.verAdopcion().subscribe(data =>{
      this.adopcion = data;
    })

    const token = localStorage.getItem('token');
    if (token) {
      this.loggedIn = true;
    }
  }

  
  

}
