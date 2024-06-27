const mongoose = require('mongoose')

const generoSchema = mongoose.Schema({

    nombre: {
        type: String,
        required: true
    }

},

{
    timestamps: true,
    versionKey: false
}
)

module.exports = mongoose.model('Genero', generoSchema)