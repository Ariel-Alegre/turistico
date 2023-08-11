require('dotenv').config()
const express = require('express');
const app = express();
const routers = require('./src/routes/index');
const cors = require('cors');
const bodyParser = require('body-parser');
const PORT = 6796 || 4000


app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json())


app.use('/', routers)


app.listen(PORT, () => {

    console.log(`server on port ${PORT}`);
})