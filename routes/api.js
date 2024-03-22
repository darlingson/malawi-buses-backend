const express = require('express');
const router = express.Router();
const busController = require('../Controllers/busController');

router.get('/buses', busController.getAllBuses);
router.get('/routes?', busController.getBusRoutes);
router.get('/search', busController.getRouteFromKeyword);
router.get('/destinations', busController.getDestinations);
router.get('/starts', busController.getStarts);
router.get('getStages', busController.getStages);
module.exports = router;
