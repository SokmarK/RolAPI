import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ServicesService } from '../../services/services.service';


@Component({
  selector: 'app-body',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
    admin:any
constructor(private _servicio:ServicesService){

}
ngOnInit(){
    this.admin = this._servicio.verficarRol()
}



}
