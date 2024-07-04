import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ServicesService } from '../../../../services/services.service';

@Component({
    selector: 'app-formulario-musica',
    standalone: true,
    imports: [
        ReactiveFormsModule
    ],
    templateUrl: './formulario-musica.component.html',
    styleUrl: './formulario-musica.component.css'
})
export class FormularioMusicaComponent {

   
    formMusica: FormGroup


    constructor(private fb: FormBuilder, private _apiService: ServicesService) {
        this.formMusica = this.fb.group({
            nombre: ["", [Validators.required]],
            link: ["", [Validators.required]],
            genero :["" , [Validators.required]]
        })
    }

    sendFormMusica() {
        if (this.formMusica.valid) {
            this._apiService.postMusica(this.formMusica.value).subscribe((data: any) => {

                Swal.fire({
                    title: 'Cree una nueva canción',
                    confirmButtonText: 'Crear'
                })
                setTimeout(() => {
                    location.reload()
                }, 3000);



            })

        } else {
            Swal.fire({
                title: 'Digite el nombre de la canción',
                confirmButtonText: 'Listo',
                icon: "error"
            })

        }
    }
}
