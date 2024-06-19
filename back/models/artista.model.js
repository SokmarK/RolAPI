const mongoose = require('mongoose')

const artistaSchema = mongoose.Schema({

    nombre: {
        type: String,
        required: true
    },
    edad: {
        type:  String,
        required: true
    },
    pais: {
        type: String,
        required: true
    },
    nombre_artista: {
        type: String,
        required: true
    }

},

{
    timestamps: true,
    versionKey: false
}
)

module.exports = mongoose.model('Artista', artistaSchema)