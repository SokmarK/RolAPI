import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ServicesService } from '../../../../services/services.service';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-formulario-artistas',
    standalone: true,
    imports: [
        ReactiveFormsModule
    ],
    templateUrl: './formulario-artistas.component.html',
    styleUrl: './formulario-artistas.component.css'
})
export class FormularioArtistasComponent {

    formArtista: FormGroup
    regexNumros: any = /^\d+$/

    constructor(private fb: FormBuilder, private _apiService: ServicesService) {
        this.formArtista = this.fb.group({
            nombre: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
            edad: ["", [Validators.required, Validators.pattern(this.regexNumros)]],
            pais: ["", [Validators.required]],
            nombre_artista: ["", [Validators.required]]
        })
    }



    sendFormulario() {
        if (this.formArtista.valid) {

            this._apiService.postArtista(this.formArtista.value).subscribe((data: any) => {


                Swal.fire({
                    title: 'Cree un nuevo Artista',
                    confirmButtonText: 'Crear'
                })
                setTimeout(() => {
                    location.reload()
                }, 3000);

            })

        } else {

            Swal.fire({
                title: 'Digite el nombre del A',
                confirmButtonText: 'Cool',
                icon: "error"
            })
        }

    }
}
