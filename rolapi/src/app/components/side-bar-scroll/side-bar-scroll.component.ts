import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-side-bar-scroll',
    standalone: true,
    imports: [
        CommonModule,
        RouterLink

    ],
    templateUrl: './side-bar-scroll.component.html',
    styleUrl: './side-bar-scroll.component.css'
})
export class SideBarScrollComponent {

}
