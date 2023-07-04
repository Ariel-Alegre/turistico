const express = require('express');
const router = express.Router();
const {RegisterUser} = require('../../src/controllers/User/RegisterUser');
const {LoginUser} = require('../../src/controllers/User/LoginUser');
const {AllUser} = require('../../src/controllers/User/AllUser');




router.post('/auth/register', RegisterUser);
router.post('/auth/login', LoginUser);
router.get('/users', AllUser);



module.exports = router