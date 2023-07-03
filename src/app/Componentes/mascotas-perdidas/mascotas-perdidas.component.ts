import { Component, OnInit } from '@angular/core';
import { ApiMascotasService } from 'src/app/Servicios/api-mascotas.service';

@Component({
  selector: 'app-mascotas-perdidas',
  templateUrl: './mascotas-perdidas.component.html',
  styleUrls: ['./mascotas-perdidas.component.css']
})
export class MascotasPerdidasComponent implements OnInit {

  constructor(private datosApi: ApiMascotasService) { }
  perdidos: any;

  ngOnInit(): void {
    this.datosApi.verMascotas().subscribe(data =>{
      this.perdidos = data;
    })
  }

}
