const moongose = require('mongoose');
require('dotenv').config({ path: 'config.env' })

const conectarDB = async () => {
    try {
        await moongose.connect(process.env.MONGO_DB,)
        console.log('DB Conectada');
    } catch (error) {
        console.log(error);
    }
}

module.exports = conectarDB