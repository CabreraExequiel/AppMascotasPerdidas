import { Component, OnInit } from '@angular/core';
import { ApiMascotasService } from 'src/app/Servicios/api-mascotas.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-mascotas-perdidas',
  templateUrl: './mascotas-perdidas.component.html',
  styleUrls: ['./mascotas-perdidas.component.css']
})
export class MascotasPerdidasComponent implements OnInit {

loggedIn = false;
  nuevaMascotaForm!: FormGroup;
  mostrarFormulario = false;
  


  constructor(private datosApi: ApiMascotasService, private formBuilder: FormBuilder) { }
  perdidos: any;

  ngOnInit(): void {
    this.datosApi.verMascotas().subscribe(data =>{
      this.perdidos = data;
    })

    const token = localStorage.getItem('token');
    if (token) {
      this.loggedIn = true;
    }

    this.nuevaMascotaForm = this.formBuilder.group({
      raza:[''],
      descripcion: [''],
      fecha: [''],
      ubicacion: [''],
      url_img: ['']
    })
  }
  agregarMascota(){
    const nuevaMascota = this.nuevaMascotaForm.value;
    this.datosApi.agregarMascota(nuevaMascota).subscribe(() => {
      alert("Se agrego exitosamente");
      this.perdidos.push(nuevaMascota);
      this.nuevaMascotaForm.reset();
    })
  }

  eliminarMascota(mascota: any) {
    this.datosApi.eliminarMascota(mascota.id).subscribe(() => {
      const index = this.perdidos.indexOf(mascota);
      
      if (index > -1) {
        this.perdidos.splice(index, 1);
      }
    });
    alert("eliminada");
    
  }
  

  abrirModal() {
    this.mostrarFormulario = true;
  }
  

  

}
