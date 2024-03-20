const express = require('express');
const router = express.Router();
const busController = require('../Controllers/busController');

router.get('/buses', busController.getAllBuses);

module.exports = router;
