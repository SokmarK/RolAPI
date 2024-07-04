const express = require('express')
const router = express.Router()
const artistaController = require('../controllers/artista.controller')
const generoController = require('../controllers/genero.controller')
const musicaController = require('../controllers/musica.controller')

router.post('/Crear-Artista', artistaController.crearArtistas)
router.get('/Buscar-Artista/:id', artistaController.consultarUnArtista)
router.get('/Listar-Artistas', artistaController.consultarArtistas)
router.put('/Actualizar-Artista/:id', artistaController.actualizarArtista)
router.delete('/Borrar-Artista/:id', artistaController.borrarArtista)


router.post('/Crear-Genero', generoController.crearGenero)
router.get('/Buscar-Genero/:id', generoController.consultarUnGenero)
router.get('/Listar-Generos', generoController.consultarGeneros)
router.put('/Actualizar-Genero/:id', generoController.actualizarGenero)
router.delete('/Borrar-Genero/:id', generoController.borrarGenero)


router.post('/Crear-Musica', musicaController.crearCancion)
router.get('/Buscar-Musica/:id', musicaController.consultarUnaCancion)
router.get('/Listar-Canciones', musicaController.consultarCanciones)
router.put('/Actualizar-Cancion/:id', musicaController.actualizarCancion)
router.delete('/Borrar-Musica/:id', musicaController.borrarCancion)



module.exports = router