import { Component } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
    selector: 'app-generos-admin',
    standalone: true,
    imports: [],
    templateUrl: './generos-admin.component.html',
    styleUrl: './generos-admin.component.css'
})
export class GenerosAdminComponent {

    alerta_crear() {
        Swal.fire({
            title: 'Cree un nuevo género',
            text: 'Do you want to continue',
            confirmButtonText: 'Cool'
        })
    }


}
