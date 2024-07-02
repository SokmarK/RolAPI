import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-artistas-admin',
  standalone: true,
  imports: [],
  templateUrl: './artistas-admin.component.html',
  styleUrl: './artistas-admin.component.css'
})
export class ArtistasAdminComponent {

    alerta_crear() {
        Swal.fire({
            title: 'Cree un nuevo género',
            text: 'Do you want to continue',
            confirmButtonText: 'Cool'
        })
    }


}
