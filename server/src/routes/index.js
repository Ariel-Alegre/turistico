const express = require('express');
const router = express.Router()

router.get('/', (req,res) => {
    res.send('empezando')
})

module.exports = router