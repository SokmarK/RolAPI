import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../../services/services.service';
import { FormularioMusicaComponent } from './formulario-musica/formulario-musica.component';

@Component({
    selector: 'app-musica-admin',
    standalone: true,
    imports: [
        FormularioMusicaComponent
    ],
    templateUrl: './musica-admin.component.html',
    styleUrl: './musica-admin.component.css'
})
export class MusicaAdminComponent implements OnInit {


    dataMusica: any


    constructor(private _apiService: ServicesService) {

    }


    ngOnInit(): void {
        this.consultarInfoMusica();
    }


    consultarInfoMusica() {
        this._apiService.getCancion().subscribe((data: any) => {
            this.dataMusica = data
            console.log(this.dataMusica);

        })

    }

}
