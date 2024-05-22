const express = require('express');
const router = express.Router();


const loginControllers = require('../controller/login.controller.js')


router.post('/login', loginControllers.login)




module.exports = router