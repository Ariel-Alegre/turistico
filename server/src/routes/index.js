const express = require('express');
const router = express.Router();
const routerUser = require('./user_routers');
const routerImages = require('./images.routers');
const postRouter = require('./turistic_routers');


router.use('/', routerUser, routerImages, postRouter)


module.exports = router