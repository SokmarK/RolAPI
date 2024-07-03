import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  guardarUsuario(user:any) {
    return this.http.post<any>("http://localhost:3000/api/usuarios/crear", user);
  }  
}
