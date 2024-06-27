import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';
import { OffcanvasComponent } from '../offcanvas/offcanvas.component';


@Component({
  selector: 'app-side-bar-scroll',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    SideBarScrollComponent,

  ],
  templateUrl: './side-bar-scroll.component.html',
  styleUrl: './side-bar-scroll.component.css'
})
export class SideBarScrollComponent {

}
