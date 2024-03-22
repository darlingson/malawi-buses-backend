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
  const starttime = req.query.starttime;
  const destination = req.query.destination;
  let sql = `SELECT * FROM Route`;
  const params = [];

  if (bus) {
    sql += ` WHERE busId = ?`;
    params.push(bus);
  }
  if (starttime) {
    sql += ` WHERE takeoffTime >= ?`;
    params.push(starttime);
  }
  if (destination) {
    sql += ` WHERE destination = ?`;
    params.push(destination);
  }
console.log(sql);
  db.all(sql, params, (err, routes) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }
    res.json(routes);
  });
};
exports.getRouteFromKeyword = async (req, res) => {
  const keyword = req.query.keyword;
  const sql = `SELECT * FROM Route WHERE start LIKE ? OR destination LIKE ?`;
  const params = [`%${keyword}%`, `%${keyword}%`];
  db.all(sql, params, (err, routes) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }
    res.json(routes);
  });
}

exports.getDestinations = async (req, res) => {
  const sql = `SELECT DISTINCT destination,busId,name FROM Route JOIN Bus ON Route.busId = Bus._id`;
  db.all(sql, [], (err, destinations) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }
    res.json(destinations);
  });
}
exports.getStarts = async (req, res) => {
  const sql = `SELECT DISTINCT start,busId,name FROM Route JOIN Bus ON Route.busId = Bus._id`;
  db.all(sql, [], (err, starts) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }
    res.json(starts);
  });
}
exports.getStages = async (req, res) => {
  const sql = `SELECT DISTINCT stage,name FROM Bus`;
  db.all(sql, [], (err, stages) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }
    res.json(stages);
  });
}