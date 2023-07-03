require('dotenv').config()
const express = require('express');
const app = express();
const routers = require('./src/routes/index');
const cors = require('cors');

app.use(cors())
app.use(express.json())


app.use('/', routers)


app.listen(4000, () => {

    console.log('server on port 4000');
})