let MusicaClass = require('../models/musica.model')

exports.crearCancion = async(req, res) => {
    try {
        let canciondata = new MusicaClass(req.body)
        await canciondata.save()
        res.status(200).send(canciondata)
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
}

exports.consultarCanciones = async(req,res) =>{
try {
    let cancionData = await MusicaClass.find()
    res.status(200).send(cancionData)
} catch (error) {
    console.log(error);
    res.status(500).send({msg : `Hubo un problema al consultar las canciones. Error : ${error}`})
}
}
exports.consultarMusicaXGenero = async(req,res) =>{
try {
    let cancionData = await MusicaClass.find({genero: req.params.nombreGenero})
    res.status(200).send(cancionData)
} catch (error) {
    console.log(error);
    res.status(500).send({msg : `Hubo un problema al consultar las canciones. Error : ${error}`})
}
}




exports.consultarUnaCancion = async(req,res) =>{
try {
    let cancionData = await MusicaClass.findById(req.params.id)
    if (!cancionData) {
        return res.status(404).send({ msg: "No se encontró la cancion" })
    } else {
        res.status(200).send(cancionData)
    }
} catch (error) {
    console.log(error);
    res.status(500).send({msg :`Hubo un problema al consultar la cancion. Error : ${error}`})
}
}


exports.actualizarCancion = async(req,res) => {
try {
    const { nombre, link } = req.body
		let cancionData = await MusicaClass.findById(req.params.id)
		if(!cancionData){
			return res.status(404).send({msg: "Cancion no encontrada"})
		}else{
			cancionData.nombre = nombre
            cancionData.link = link
			await MusicaClass.findByIdAndUpdate(req.params.id, cancionData)
			return res.status(200).send({ mensaje: "Cancion actualizada", cancionData })
		}
} catch (error) {
    console.log(error);
    res.status(500).send({msg: `Hubo un problema actualizando la cancion. Error : ${error}`})
}
}


exports.borrarCancion = async (req,res) => {
try {
    let cancionData = await MusicaClass.findById(req.params.id)
        if (!cancionData) {
            return res.status(404).send({msg : "No se encontro la cancion. Error"})
        } else {
            await MusicaClass.findByIdAndDelete(req.params.id)
            res.status(200).send({ msg: "Cancion eliminada correctamente" })
        }
} catch (error) {
    console.log(error);
    res.status(500).send({msg : `Hubo un problema borrando la cancion. Error ${error}`})
}
}