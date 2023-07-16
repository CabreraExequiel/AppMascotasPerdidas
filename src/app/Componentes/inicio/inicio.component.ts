import { Component, OnInit } from '@angular/core';
import { ApiMascotasService } from 'src/app/Servicios/api-mascotas.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private datosApi: ApiMascotasService) { }
  mascota: any;

  ngOnInit(): void {
    this.datosApi.verMascotas().subscribe(data =>{
      this.mascota = data;
    })
  }
  showPrevious(): void {
    // Logic to show the previous card
  }

  showNext(): void {
    // Logic to show the next card
  }

}
