const express = require('express')
const router = express.Router()

router.post('/crear', () => {
    console.log('creando');
})

module.exports = router