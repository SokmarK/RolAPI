import { Component } from '@angular/core';
import { FormularioGenerosComponent } from './formulario-generos/formulario-generos.component';
import { ServicesService } from '../../../services/services.service';
import Swal from 'sweetalert2'

@Component({
    selector: 'app-generos-admin',
    standalone: true,
    imports: [
        FormularioGenerosComponent
    ],
    templateUrl: './generos-admin.component.html',
    styleUrl: './generos-admin.component.css'
})
export class GenerosAdminComponent {

    dataGeneros:any
    idConsulta: any = ""

    constructor(private _apiService: ServicesService){

    }

    ngOnInit():void{
        this.consultarInfo()
    }

    consultarInfo(){
        this._apiService.getGeneros().subscribe((data:any) => {
            this.dataGeneros = data
            console.log(this.dataGeneros)
        })
    }


    alimentarFormulario(id: string) {
        this.idConsulta = id

    }


    eliminarGenero(id: string) {
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
                this._apiService.deleteGenero(id).subscribe((data: any) => {
                    this.consultarInfo();
                });
                Swal.fire({
                    title: "Genero eliminado correctamente!",
                });
            }
        });
    }



}
