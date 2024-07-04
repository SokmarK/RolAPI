import { Routes } from '@angular/router';
import { BodyComponent } from './components/body/body.component';
import { OffcanvasComponent } from './components/offcanvas/offcanvas.component';
import { ChildReggaetonComponent } from './components/child-reggaeton/child-reggaeton.component';
import { ChildElectronicaComponent } from './components/child-electronica/child-electronica.component';
import { ChildPopularComponent } from './components/child-popular/child-popular.component';
import { ChildVallenatoComponent } from './components/child-vallenato/child-vallenato.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { HeaderComponent } from './components/header/header.component';
import { ArtistasAdminComponent } from './components/admin/artistas-admin/artistas-admin.component';
import { GenerosAdminComponent } from './components/admin/generos-admin/generos-admin.component';
import { ReggaeComponent } from './components/reggae/reggae.component';
import { SearchComponent } from './components/search/search.component';

export const routes: Routes = [
    { path: "", component: LoginComponent },
    {
        path:"login", component: LoginComponent
    },
    {
        path: "registro", component: RegistroComponent
    },
    {
        path: "header", component: HeaderComponent
    },
    { path: "genero-reggaeton", component: ChildReggaetonComponent },
    { path: "genero-electronica", component: ChildElectronicaComponent },
    { path: "genero-popular", component: ChildPopularComponent },
    { path: "genero-vallenato", component: ChildVallenatoComponent },
    { path: "artistas-admin", component: ArtistasAdminComponent },
    { path: "generos-admin", component: GenerosAdminComponent },
    { path : "reggae", component: ReggaeComponent},
    { path: "search", component: SearchComponent}
];
