
const bookingSchema = `
CREATE TABLE IF NOT EXISTS Booking (
    _id INTEGER PRIMARY KEY AUTOINCREMENT,
    busId INTEGER NOT NULL,
    userId INTEGER NOT NULL,
    routeId INTEGER NOT NULL,
    seatNumber INTEGER NOT NULL,
    bookingDate DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (busId) REFERENCES Bus(_id),
    FOREIGN KEY (userId) REFERENCES User(_id),
    FOREIGN KEY (routeId) REFERENCES Route(_id)
);`;

const routeSchema = `
CREATE TABLE IF NOT EXISTS Route (
    _id INTEGER PRIMARY KEY AUTOINCREMENT,
    busId INTEGER NOT NULL,
    start TEXT NOT NULL,
    destination TEXT NOT NULL,
    takeoffTime DATETIME NOT NULL,
    arrivalTime DATETIME NOT NULL,
    price REAL NOT NULL,
    FOREIGN KEY (busId) REFERENCES Bus(_id)
);`;

const busSchema = `
CREATE TABLE IF NOT EXISTS Bus (
    _id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    name TEXT NOT NULL,
    contact TEXT NOT NULL,
    stage TEXT NOT NULL
);`;

const userSchema = `
CREATE TABLE IF NOT EXISTS User (
    _id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL UNIQUE,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    firstName TEXT,
    lastName TEXT,
    phoneNumber TEXT,
    address TEXT,
    pointOfContact TEXT,
    pointOfContactNumber TEXT
);`;

module.exports = {
    bookingSchema,
    routeSchema,
    busSchema,
    userSchema
};
