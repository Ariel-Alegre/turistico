const express = require('express');
const router = express.Router();
const routerUser = require('./user_routers')

router.use('/', routerUser)

module.exports = router