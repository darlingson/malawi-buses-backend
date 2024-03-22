const express = require('express');
const router = express.Router();
const busController = require('../Controllers/busController');

router.get('/buses', busController.getAllBuses);
router.get('/routes?', busController.getBusRoutes);
router.get('/search', busController.getRouteFromKeyword);
module.exports = router;
