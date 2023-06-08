const express = require('express');
const router = express.Router()
const authenticationController = require('../controllers/authentication-controller.js');
const homeController = require('../controllers/home-controller.js');

router.get('/login', authenticationController.login);
router.get('/register', authenticationController.register);
router.post('/login', authenticationController.storeUser);

router.get('/', homeController.home);



module.exports = router