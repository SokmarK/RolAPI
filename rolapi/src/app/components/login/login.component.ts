import { Component, input } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  user:any = {}
  email: string = ''
  password: string = ''

  constructor(private apiLogin: AuthService, private router: Router ){  }

  verificarUsuarios(){
    this.user.email = this.email
    this.user.password = this.password

    if(this.user.email != "" ){
      this.apiLogin.login(this.user)
      .subscribe(respuesta => {
        console.log(respuesta);
        
        if(respuesta.status ==  "NOTFOUND"  ){
          alert("El usuario no existe")
        }

        if(respuesta.status =="PASSWORDWRONG") {
          alert("Contraseña incorrecta")
        }

        if(respuesta.status == "OK"){
          this.router.navigate(['body']);
        }

      }
      )
    }
  }
}
