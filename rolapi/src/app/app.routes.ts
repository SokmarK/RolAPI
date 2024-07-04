import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { HeaderComponent } from './components/header/header.component';
import { SalsaChokeComponent } from './components/salsa-choke/salsa-choke.component';
import { GeneroPopComponent } from './components/genero-pop/genero-pop.component';
import { ReggaeComponent } from './components/reggae/reggae.component';

export const routes: Routes = [
    {
        path: '', component: HeaderComponent
    },
    {
        path: 'header', component: HeaderComponent
    },
    {
        path: 'login', component: LoginComponent
    },
    {
        path: 'registro', component: RegistroComponent
    },
    
    // {
    //     path: 'salsa-choke', component: SalsaChokeComponent
    // },
    // {
    //     path: 'reggae', component: ReggaeComponent
    // },
    // {
    //     path: 'genero-pop', component: GeneroPopComponent
    // }
];
