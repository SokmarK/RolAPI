import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BodyComponent } from './components/body/body.component';
import { SearchComponent } from './components/search/search.component';
import { SideBarScrollComponent } from './components/side-bar-scroll/side-bar-scroll.component';
import { OffcanvasComponent } from './components/offcanvas/offcanvas.component';


@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        RouterOutlet,
        BodyComponent,
        SearchComponent,
        SideBarScrollComponent,
        OffcanvasComponent
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'

})
export class AppComponent {
    title = 'rolapi';
}
