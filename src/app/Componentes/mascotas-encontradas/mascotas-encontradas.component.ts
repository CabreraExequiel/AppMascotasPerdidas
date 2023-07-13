import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiMascotasService } from 'src/app/Servicios/api-mascotas.service';

@Component({
  selector: 'app-mascotas-encontradas',
  templateUrl: './mascotas-encontradas.component.html',
  styleUrls: ['./mascotas-encontradas.component.css']
})
export class MascotasEncontradasComponent implements OnInit {

loggedIn = false;
nuevaAdopcionForm!: FormGroup;
  mostrarFormulario = false;

  constructor(private datosApi: ApiMascotasService, private formBuilder: FormBuilder) { }
  adopcion: any;

  ngOnInit(): void {
    this.datosApi.verAdopcion().subscribe(data =>{
      this.adopcion = data;
    })

    const token = localStorage.getItem('token');
    if (token) {
      this.loggedIn = true;
    }

    this.nuevaAdopcionForm = this.formBuilder.group({
      raza:[''],
      descripcion: [''],
      fecha: [''],
      ubicacion: [''],
      url_img: ['']
    })
  }

  agregarAdopcion(){
    const nuevaAdopcion = this.nuevaAdopcionForm.value;
    this.datosApi.agregarAdopcion(nuevaAdopcion).subscribe(() => {
      alert("Se agrego exitosamente");
      this.adopcion.push(nuevaAdopcion);
      this.nuevaAdopcionForm.reset();
    })
  }

  eliminarAdopcion(mascota: any) {
    this.datosApi.eliminarAdopcion(mascota.id).subscribe(() => {
      const index = this.adopcion.indexOf(mascota);
      
      if (index > -1) {
        this.adopcion.splice(index, 1);
      }
    });
    alert("eliminada");
    
    
    
  }

  abrirModal() {
    this.mostrarFormulario = true;
  }
  
  
  

}
