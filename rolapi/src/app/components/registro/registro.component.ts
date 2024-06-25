import { Component } from '@angular/core';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {

}

let btn_registrar = document.getElementById("btn-registro")
var url_get = "http://localhost:3000/api/usuarios/:id"
var url_post ="http://localhost:3000/api/usuarios/crear"




