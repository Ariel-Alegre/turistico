const express = require('express');
const router = express.Router();
const routerUser = require('./user_routers');
const routerImages = require('./images.routers');
const postRouter = require('./turistic_routers');
const imagesRoutes = require('./images.routers')


router.use('/', routerUser, routerImages, postRouter, imagesRoutes)


module.exports = router