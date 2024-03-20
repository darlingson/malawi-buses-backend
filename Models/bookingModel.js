const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  busId: { type: mongoose.Schema.Types.ObjectId, ref: 'Bus', required: true }, 
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, 
  routeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Route', required: true }, 
  seatNumber: { type: Number, required: true },
  bookingDate: { type: Date, default: Date.now },
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
