import { Component } from '@angular/core';
import { ServicesService } from '../../../services/services.service';
import { FormularioArtistasComponent } from './formulario-artistas/formulario-artistas.component';

@Component({
    selector: 'app-artistas-admin',
    standalone: true,
    imports: [
        FormularioArtistasComponent
    ],
    templateUrl: './artistas-admin.component.html',
    styleUrl: './artistas-admin.component.css'
})
export class ArtistasAdminComponent {

    dataArtistas: any



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

}
