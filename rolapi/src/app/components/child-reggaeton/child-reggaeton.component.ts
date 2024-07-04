import { Component } from '@angular/core';
import { ServicesService } from '../../services/services.service';

@Component({
    selector: 'app-child-reggaeton',
    standalone: true,
    imports: [],
    templateUrl: './child-reggaeton.component.html',
    styleUrl: './child-reggaeton.component.css'
})
export class ChildReggaetonComponent {

    listaCanciones: any

    constructor(private _api: ServicesService) { }

    ngOnInit() {
        this._api.getMusicaXGenero("reggaeton").subscribe((data: any) => {
            this.listaCanciones = data
        })
    }
}
