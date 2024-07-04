import { Component } from '@angular/core';
import { ServicesService } from '../../services/services.service';

@Component({
    selector: 'app-offcanvas',
    standalone: true,
    imports: [],
    templateUrl: './offcanvas.component.html',
    styleUrl: './offcanvas.component.css'
})
export class OffcanvasComponent {
    admin: any
    constructor(private _servicio: ServicesService) {
    }
    ngOnInit() {
        this.admin = this._servicio.verficarRol()
    }
}
