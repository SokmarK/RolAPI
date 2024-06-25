import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BodyComponent } from './components/body/body.component';
import { SearchComponent } from './components/search/search.component';

@Component({
   selector: 'app-root',
   standalone: true,
   imports: [
      RouterOutlet,
      BodyComponent,
      SearchComponent
   ],
   templateUrl: './app.component.html',
   styleUrl: './app.component.css'
})
export class AppComponent {
   title = 'rolapi';
}
