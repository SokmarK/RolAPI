const express = require("express");
const conectarDB = require('./config/db')
const cors = require('cors')
const app = express();

conectarDB();

app.use(cors())
app.use(express.json())


app.use('/RolAPI', require('./routes/routes'))

// app.get('/', (req, res) => {
//     res.send('Hola mundo')
// })

app.listen(4000, () => {
    console.log("El servidor se ejecuta en : http://localhost:4000");
})