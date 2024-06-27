import { Genero } from "./generos.model"

export interface Musica{
id?: string,
nombre: string,
duracion: string
genero : Genero
}