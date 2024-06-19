let Genero = require('../models/genero.model')

exports.crearGenero = async(req, res) => {
    try {
        let genero = new Genero(req.body)
        await genero.save()
        res.status(200).send(genero)
    } catch (error) {
        console.log(error);
        res.status(500).send(genero)
    }
}

exports.consultarGeneros = async(req,res) =>{
try {
    let datagenero = await Genero.find()
    res.status(200).send(datagenero)
} catch (error) {
    console.log(error);
    res.status(500).send({msg : `Hubo un problema al consultar los generos. Error : ${error}`})
}
}


exports.consultarUnGenero = async(req,res) =>{
try {
    let datagenero = await Genero.findById(req.params.id)
    if (!datagenero) {
        return res.status(404).send({ msg: "No se encontró el genero" })
    } else {
        res.status(200).send(datagenero)
    }
} catch (error) {
    console.log(error);
    res.status(500).send({msg :`Hubo un problema al consultar el genero. Error : ${error}`})
}
}


exports.actualizarGenero = async(req,res) => {
try {
    const { nombre } = req.body
		let datagenero = await Genero.findById(req.params.id)
		if(!datagenero){
			return res.status(404).send({msg: "genero no encontrado"})
		}else{
			datagenero.nombre = nombre
			await Genero.findByIdAndUpdate(req.params.id, datagenero)
			return res.status(200).send({ mensaje: "Genero actualizado", dataGenero })
		}
} catch (error) {
    console.log(error);
    res.status(500).send({msg: `Hubo un problema actualizando el genero. Error : ${error}`})
}
}


exports.borrarGenero = async (req,res) => {
try {
    let datagenero = await Genero.findById(req.params.id)
        if (!datagenero) {
            return res.status(404).send({msg : "No se encontro el genero. Error"})
        } else {
            await Genero.findByIdAndDelete(req.params.id)
            res.status(200).send({ msg: "Genero eliminado correctamente" })
        }
} catch (error) {
    console.log(error);
    res.status(500).send({msg : `Hubo un problema borrando el genero. Error ${error}`})
}
}