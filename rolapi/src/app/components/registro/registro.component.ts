import { Component, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms'


@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
    user:any = {};  
    dateBirthday:any = ''
    name:string = ''
    lastName:string =''
    gender: string =''
    email: string =''
    password: string =''
    constructor(private apiRegistro: AuthService ){
      
    }

    guadarUsiarios(){
      console.log(this.name);
      console.log(this.lastName);
      console.log(this.gender);
      console.log(this.dateBirthday);
      console.log(this.email);

      this.user.name = this.name;
      this.user.lastName = this.lastName
      this.user.dateBirthday = this.dateBirthday
      this.user.gender = this.gender
      this.user.email = this.email
      this.user.password = this.password
      this.apiRegistro.guardarUsuario(this.user)
      .subscribe(respuesta =>  console.log("ya se registro",respuesta));
      
      window.alert('Ya fue registrado');

    }
    
}




