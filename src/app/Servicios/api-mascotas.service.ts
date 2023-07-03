import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ApiMascotasService {
  private apiURL = environment.apiURL;

  constructor(private http:HttpClient) { }
  
  verMascotas(): Observable<any> {
    return this.http.get(`${this.apiURL}/ver/mascota`);
  }

  verAdopcion(): Observable<any>{
    return this.http.get(`${this.apiURL}/ver/adopcion`)
  }

  login(credentials: { email: string, password: string }): Observable<any> {
    return this.http.post(`${this.apiURL}/login`, credentials);
  }
}
