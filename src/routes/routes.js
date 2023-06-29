const express = require('express');
const router = express.Router()

const createController = require('../controllers/crud_controllers/create-controller.js');
const readController = require('../controllers/crud_controllers/read-controller.js');
const updateController = require('../controllers/crud_controllers/update-controller.js');
const deleteController = require('../controllers/crud_controllers/delete-controller.js');

// Create routes
router.post('/account-creation', createController.storeUser);
router.post('/product-creation', createController.storeProduct);

// Read routes
router.get('/', readController.home);
router.get('/login', readController.login);
router.get('/register', readController.register);
router.get('/admin', readController.adminPanel);
router.get('/worker', readController.workerPanel);
router.get('/account-management', readController.accountManagement);
router.get('/product-management', readController.productManagement);
router.get('/account-creation', readController.accountCreation);
router.get('/product-creation', readController.productCreation);


module.exports = router