const mongoose = require('mongoose');

const routeSchema = new mongoose.Schema({
  start: { type: String, required: true },
  destination: { type: String, required: true },
  takeoffTime: { type: Date, required: true },
  arrivalTime: { type: Date, required: true },
  price: { type: Number, required: true },
});

const busSchema = new mongoose.Schema({
  name: { type: String, required: true },
  routes: [routeSchema], 
});

const Bus = mongoose.model('Bus', busSchema);

module.exports = Bus;
