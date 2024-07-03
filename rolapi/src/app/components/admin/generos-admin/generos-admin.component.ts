import { Component } from '@angular/core';
import Swal from 'sweetalert2'
import { FormularioGenerosComponent } from './formulario-generos/formulario-generos.component';
import { ServicesService } from '../../../services/services.service';

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


}
