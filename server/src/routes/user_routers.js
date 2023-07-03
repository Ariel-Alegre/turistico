const express = require('express');
const router = express.Router();
const {RegisterUser} = require('../../src/controllers/User/RegisterUser');
const {LoginUser} = require('../../src/controllers/User/LoginUser');


router.post('/register', RegisterUser);
router.post('/login', LoginUser);


module.exports = router