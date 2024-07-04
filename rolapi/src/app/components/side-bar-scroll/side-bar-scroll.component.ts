import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';
import { OffcanvasComponent } from '../offcanvas/offcanvas.component';
import { ServicesService } from '../../services/services.service';
import Swal from 'sweetalert2'


@Component({
    selector: 'app-side-bar-scroll',
    standalone: true,
    imports: [
        CommonModule,
        RouterLink,
        SideBarScrollComponent
    ],
    templateUrl: './side-bar-scroll.component.html',
    styleUrl: './side-bar-scroll.component.css'
})
export class SideBarScrollComponent implements OnInit {
    admin: any
    constructor(private _apiService: ServicesService) {

    }

    ngOnInit(): void {
        this.prueba()

    }

    prueba() {
        this.admin = this._apiService.verficarRol()
        console.log(this.admin);
    }




}


