import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ServicesService } from '../../services/services.service';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [RouterLink, RouterOutlet],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
})
export class HeaderComponent {
    admin: any

    constructor(private _apiService: ServicesService) {

    }

    ngOnInit() {
        this.admin = this._apiService.verficarRol()
    }

}
