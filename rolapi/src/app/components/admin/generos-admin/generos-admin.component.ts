import { Component } from '@angular/core';
import { FormularioGenerosComponent } from './formulario-generos/formulario-generos.component';
import { ServicesService } from '../../../services/services.service';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

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
    esAdminis:any

    constructor(private _apiService: ServicesService, private route: Router){
    }

    ngOnInit():void{
        this.consultarInfo()
        this.esAdminis = this._apiService.verficarRol()
        if (!this.esAdminis) {
            this.route.navigate(["/"])
        }
    }

    consultarInfo(){
        this._apiService.getGeneros().subscribe((data:any) => {
            this.dataGeneros = data
            console.log(this.dataGeneros)
        })
    }

    alimentarFormulario(id:any){
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
