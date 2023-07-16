import { Component, OnInit } from '@angular/core';
import { ApiMascotasService } from 'src/app/Servicios/api-mascotas.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  mascota: any;
  currentCardIndex = 0;

  constructor(private datosApi: ApiMascotasService) { }
 

  ngOnInit(): void {
    this.datosApi.verMascotas().subscribe(data =>{
      this.mascota = data;
    })
    
  }
  showPrevious(): void {
    if (this.currentCardIndex > 0) {
      this.currentCardIndex--;
    } else {
      this.currentCardIndex = this.mascota.length - 1;
    }
  }

  showNext(): void {
    if (this.currentCardIndex < this.mascota.length - 1) {
      this.currentCardIndex++;
    } else {
      this.currentCardIndex = 0;
    }
  }
  

}
