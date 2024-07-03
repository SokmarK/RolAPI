import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ServicesService } from '../../../../services/services.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-formulario-generos',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './formulario-generos.component.html',
  styleUrl: './formulario-generos.component.css'
})
export class FormularioGenerosComponent {

    formGenero: FormGroup

    constructor(private fb: FormBuilder, private _apiService: ServicesService){
        this.formGenero = this.fb.group({
            nombre: ["", [Validators.required]]
        })
    }

    enviarFormulario(){
        if(this.formGenero.valid){
            this._apiService.postGenero(this.formGenero.value).subscribe((data:any) => {
                Swal.fire({
                    title: 'Cree un nuevo género',
                    confirmButtonText: 'Cool',
                    imageUrl: "https://i.pinimg.com/originals/33/26/14/332614a362ce0ca8da3f898db0d28c24.gif",
                })
                setTimeout(() => {
                    location.reload()
                }, 3000);
            })
        }else{
            Swal.fire({
                title: 'Digite el nombre del genero',
                confirmButtonText: 'Cool',
                icon: "error"
            })
        }

    }

}
