const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    busId: { type: mongoose.Schema.Types.ObjectId, ref: 'Bus', required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    routeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Route', required: true },
    seatNumber: { type: Number, required: true },
    bookingDate: { type: Date, default: Date.now }
});

const routeSchema = new mongoose.Schema({
    busId: { type: mongoose.Schema.Types.ObjectId, ref: 'Bus', required: true },
    start: { type: String, required: true },
    destination: { type: String, required: true },
    takeoffTime: { type: Date, required: true },
    arrivalTime: { type: Date, required: true },
    price: { type: Number, required: true }
});

const busSchema = new mongoose.Schema({
    name: { type: String, required: true },
    contact: { type: String, required: true },
    stage: { type: String, required: true }
});

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: { type: String },
    lastName: { type: String },
    phoneNumber: { type: String },
    address: { type: String },
    pointOfContact: { type: String },
    pointOfContactNumber: { type: String }
});

const Booking = mongoose.model('Booking', bookingSchema);
const Route = mongoose.model('Route', routeSchema);
const Bus = mongoose.model('Bus', busSchema);
const User = mongoose.model('User', userSchema);

module.exports = { Booking, Route, Bus, User };