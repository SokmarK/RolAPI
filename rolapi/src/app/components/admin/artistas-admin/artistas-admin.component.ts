import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../../services/services.service';
import { FormularioArtistasComponent } from './formulario-artistas/formulario-artistas.component';
import Swal from 'sweetalert2'

@Component({
    selector: 'app-artistas-admin',
    standalone: true,
    imports: [
        FormularioArtistasComponent
    ],
    templateUrl: './artistas-admin.component.html',
    styleUrl: './artistas-admin.component.css'
})
export class ArtistasAdminComponent implements OnInit {

    dataArtistas: any
    idConsulta: any = ""



    constructor(private _apiService: ServicesService) {

    }


    ngOnInit(): void {
        this.consultarInfoArtista()
    }


    consultarInfoArtista() {

        this._apiService.getArtistas().subscribe((data: any) => {
            this.dataArtistas = data
            console.log(this.dataArtistas);

        })
    }

    alimentarFormulario(id: string) {
        this.idConsulta = id
    }


    eliminarArtista(id: string) {
        Swal.fire({
            title: "Esta seguro de eliminar el genero",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Eliminar",
            cancelButtonText: "Cancelar"
        }).then((result) => {
            if (result.isConfirmed) {
                this._apiService.deleteArtista(id).subscribe((data: any) => {
                    this.consultarInfoArtista();
                });
                Swal.fire({
                    title: "Genero eliminado correctamente!",
                });
            }
        });
    }



}
