
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Artista } from '../models/artista.model'
import { Genero } from '../models/generos.model'
import { Musica } from '../models/musica.model'
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class ServicesService {

    urlAPI = environment.baseApiUrl
    esAdmin:any = false

    /** Artista */

    constructor(private http: HttpClient) { }

    postArtista(dataArtista: Artista) {
        return this.http.post(`${this.urlAPI}/Crear-Artista `, dataArtista)
    }

    getArtista(id: string): Observable<any> {
        return this.http.get(`${this.urlAPI}/Buscar-Artista/${id}`)
    }

    getArtistas() {
        return this.http.get(`${this.urlAPI}/Listar-Artistas`)
    }


    deleteArtista(id: string) {
        return this.http.delete(`${this.urlAPI}/Borrar-Artista/${id}`)
    }

    putArtista(id: string, dataArtista: Artista) {
        return this.http.put(`${this.urlAPI}/Actualizar-Artista${id}`, dataArtista)
    }


    /* Generos*/



    postGenero(dataGenero: Genero) {
        return this.http.post(`${this.urlAPI}/Crear-Genero`, dataGenero)
    }

    getGenero(id: string): Observable<any> {
        return this.http.get(`${this.urlAPI}/Buscar-Genero/${id}`)
    }
    getGeneros() {
        return this.http.get(`${this.urlAPI}/Listar-Generos`)
    }


    deleteGenero(id: string) {
        return this.http.delete(`${this.urlAPI}/Borrar-Genero/${id}`)
    }

    putGenero(id: string, dataGenero: Genero) {
        return this.http.put(`${this.urlAPI}/Actualizar-Genero${id}`, dataGenero)
    }


    /* Música */


    postMusica(dataMusica: Musica) {
        return this.http.post(`${this.urlAPI}/Crear-Musica`, dataMusica)
    }

    getMusica(id: string): Observable<any> {
        return this.http.get(`${this.urlAPI}/Buscar-Musica/${id}`)
    }
    getMusicaXGenero(nombreGenero: string): Observable<any> {
        return this.http.get(`${this.urlAPI}/Buscar-x-genero/${nombreGenero}`)
    }
    getCancion() {
        return this.http.get(`${this.urlAPI}/Listar-Canciones`)
    }


    deleteMusica(id: string) {
        return this.http.delete(`${this.urlAPI}/Borrar-Musica/${id}`)
    }

    putCancion(id: string, dataMusica: Musica) {
        return this.http.put(`${this.urlAPI}/Actualizar-Cancion${id}`, dataMusica)
    }





    verficarRol(){
        return this.esAdmin
    }

}



