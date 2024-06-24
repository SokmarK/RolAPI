import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideBarScrollComponent } from './components/side-bar-scroll/side-bar-scroll.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    SideBarScrollComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rolapi';
}
