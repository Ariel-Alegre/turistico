require('dotenv').config()
const express = require('express');
const app = express();
const routers = require('./src/routes/index')


app.use('/', routers)


app.listen(4000, () => {

    console.log('server on port 4000');
})