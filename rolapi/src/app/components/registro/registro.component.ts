import { Component, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms'
import { catchError, throwError } from 'rxjs';


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
      this.user.name = this.name;
      this.user.lastName = this.lastName
      this.user.dateBirthday = this.dateBirthday
      this.user.gender = this.gender
      this.user.email = this.email
      this.user.password = this.password
      if (this.user.email != "") {
        this.apiRegistro.guardarUsuario(this.user)
        .pipe( 
          catchError(error => {
            if(error.status === 400) {
            
              if(error.error.errores.errorResponse.code == 11000){
                alert("Ya se encuentra registrado")
              }
              return throwError(() => new Error('Bad Request'));              
            } else {
              console.log('otro error', error);
              return throwError(() => error)
            }
          })
        )
        .subscribe(respuesta => {
          if(respuesta.status == 'creado'){
            console.log();
          }else{
            console.log(respuesta.errores.errorReponse.code);
            
          }

          
        });
      }else{
        alert("email requerido")
      }
      
      

    }
    
}

 



