const mongoose = require('mongoose')

const musicaSchema = mongoose.Schema({

    nombre: {
        type: String,
        required: true
    },
    
    link: {
        type: String,
        required: true
    }

    
},

{
    timestamps: true,
    versionKey: false
}
)

module.exports = mongoose.model('musica', musicaSchema)