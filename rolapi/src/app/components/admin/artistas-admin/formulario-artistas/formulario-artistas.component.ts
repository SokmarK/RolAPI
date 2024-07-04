import { Component, Input, SimpleChanges } from '@angular/core';
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

    @Input() idArtista :string = "";

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

    ngOnChanges(changes: SimpleChanges) {
        if (this.idArtista != "") {
            this.idGeneroActualizacion(this.idArtista);
        }
    }

    idGeneroActualizacion(id: string) {
        console.log('id obtenido en hijo:', id);
        this._apiService.getArtista(id).subscribe((data: any) => {
            console.log(data);
            this.formArtista.get('nombre')?.setValue(data.nombre);
            this.formArtista.get('edad')?.setValue(data.edad);
            this.formArtista.get('pais')?.setValue(data.pais);
            this.formArtista.get('nombre_artista')?.setValue(data.nombre_artista);
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
                title: 'Llene bien todos los campos',
                confirmButtonText: 'Cool',
                icon: "error"
            })
        }

    }
}
