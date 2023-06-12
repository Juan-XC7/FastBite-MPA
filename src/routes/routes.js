const express = require('express');
const router = express.Router()
const authenticationController = require('../controllers/authentication-controller.js');
const homeController = require('../controllers/home-controller.js');

const accountController = require('../controllers/account-controller.js');
const productController = require('../controllers/product-controller.js');
const panelController = require('../controllers/panel-controller.js');


router.get('/login', authenticationController.renderLogin);
router.get('/register', authenticationController.renderRegister);
router.post('/register', authenticationController.storeUser);

router.get('/', homeController.home);

// Admin

router.get('/account-management', accountController.renderUserAccountManagement);
router.get('/account-creation', accountController.renderUserAccountCreation);
router.get('/account-edition', accountController.renderUserAccountEdition);

router.get('/product-management', productController.renderProductManagement);
router.get('/product-creation', productController.renderProductCreation);
router.get('/product-edition', productController.renderProductEdition);

router.get('/admin', panelController.renderAdminPanel);
router.get('/worker', panelController.renderWorkerPanel);



module.exports = router