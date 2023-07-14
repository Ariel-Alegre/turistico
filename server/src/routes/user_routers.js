const express = require('express');
const router = express.Router();
const {RegisterUser} = require('../../src/controllers/User/RegisterUser');
const {LoginUser} = require('../../src/controllers/User/LoginUser');
const {AllUser} = require('../../src/controllers/User/AllUser');
const {DetailUser} = require('../../src/controllers/User/DetailsUser');
const {DetailsPersonal} = require('../../src/controllers/User/DetailsPersonal');






router.post('/auth/register', RegisterUser);
router.post('/auth/login', LoginUser);
router.get('/users', AllUser);
router.get('/user', DetailUser);
router.post('/user/data', DetailsPersonal);


/*  identify,
            country,
            city */




module.exports = router