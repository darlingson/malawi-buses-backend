// const Bus = require('../Models/busModel');

// exports.getAllBuses = async (req, res) => {
//   try {
//     const buses = await Bus.find();
//     res.json(buses);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

const sqlite3 = require('sqlite3').verbose();

// Connect to SQLite database
const db = new sqlite3.Database('./mydatabase.db', (err) => {
  if (err) {
    console.error('Error connecting to SQLite database:', err.message);
  } else {
    console.log('Connected to SQLite database.');
  }
});

exports.getAllBuses = async (req, res) => {
  const sql = `SELECT * FROM Bus`;
  db.all(sql, [], (err, buses) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }
    res.json(buses);
  });
};
exports.getBusRoutes = async (req, res) => {
  const bus = req.query.bus;
  let sql = `SELECT * FROM Route`;
  const params = [];

  if (bus) {
    sql += ` WHERE busId = ?`;
    params.push(bus);
  }

  db.all(sql, params, (err, routes) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }
    res.json(routes);
  });
};