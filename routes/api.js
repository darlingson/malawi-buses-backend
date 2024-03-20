const express = require('express');
const router = express.Router();
const busController = require('../Controllers/busController');

router.get('/', busController.getAllBuses);

module.exports = router;
