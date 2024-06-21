let artistaClass = require('../models/artista.model')

exports.crearArtistas = async(req, res) => {
    try {
        let artistaData = new artistaClass(req.body)
        await artistaData.save()
        res.status(200).send(artistaData)
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
}

exports.consultarArtistas = async(req,res) =>{
try {
    let artistaData = await artistaClass.find()
    res.status(200).send(artistaData)
} catch (error) {
    console.log(error);
    res.status(500).send({msg : `Hubo un problema al consultar los artistas. Error : ${error}`})
}
}


exports.consultarUnArtista = async(req,res) =>{
try {
    let artistaData = await artistaClass.findById(req.params.id)
    console.log(artistaData);
    if (!artistaData) {
        return res.status(404).send({ msg: "No se encontró el artista." })
    } else {
        res.status(200).send(artistaData)
    }
} catch (error) {
    console.log(error);
    res.status(500).send({msg :`Hubo un problema al consultar el artista. Error : ${error}`})
}
}


exports.actualizarArtista = async(req,res) => {
try {
    const { nombre, edad, pais, nombre_artista } = req.body
		let artistaData = await artistaClass.findById(req.params.id)
		if(!artistaData){
			return res.status(404).send({msg: "Artista no encontrado."})
		}else{
			artistaData.nombre = nombre
            artistaData.edad = edad
            artistaData.pais = pais
            artistaData.nombre_artista = nombre_artista
			await artistaClass.findByIdAndUpdate(req.params.id, artistaData)
			return res.status(200).send({ mensaje: "Artista actualizado.", artistaData })
		}
} catch (error) {
    console.log(error);
    res.status(500).send({msg: `Hubo un problema actualizando el artista. Error : ${error}`})
}
}


exports.borrarArtista = async (req,res) => {
try {
    let artistaData = await artistaClass.findById(req.params.id)
        if (!artistaData) {
            return res.status(404).send({msg : "No se encontro el artista. Error"})
        } else {
            await artistaClass.findByIdAndDelete(req.params.id)
            res.status(200).send({ msg: "Artista eliminado correctamente" })
        }
} catch (error) {
    console.log(error);
    res.status(500).send({msg : `Hubo un problema borrando el artista. Error ${error}`})
}
}