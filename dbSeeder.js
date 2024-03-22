const sqlite3 = require('sqlite3').verbose();

// Connect to SQLite database
const db = new sqlite3.Database('./mydatabase.db', (err) => {
  if (err) {
    console.error('Error connecting to SQLite database:', err.message);
  } else {
    console.log('Connected to SQLite database.');
    seedDatabase();
  }
});

// Function to seed the database with dummy data
function seedDatabase() {
  // Insert sample buses
  const buses = [
    { name: 'Tam Tam' },
    { name: 'Captain' },
    { name: 'Team Kwezy' }
  ];
  const busInsertQuery = `INSERT INTO Bus (name) VALUES (?)`;
  buses.forEach((bus) => {
    db.run(busInsertQuery, [bus.name], (err) => {
      if (err) {
        console.error('Error inserting bus:', err.message);
      } else {
        console.log('Bus inserted successfully.');
      }
    });
  });

  // Insert sample routes
  const routes = [
    { start: 'Blantyre', destination: 'Lilongwe', takeoffTime: '08:00', arrivalTime: '11:00', price: 20000, busId: 1 },
  ];
  const routeInsertQuery = `INSERT INTO Route (start, destination, takeoffTime, arrivalTime, price) VALUES (?, ?, ?, ?, ?)`;
  routes.forEach((route) => {
    db.run(routeInsertQuery, [route.start, route.destination, route.takeoffTime, route.arrivalTime, route.price], (err) => {
      if (err) {
        console.error('Error inserting route:', err.message);
      } else {
        console.log('Route inserted successfully.');
      }
    });
  });

  // Insert sample users
  const users = [
    { username: 'user1', email: 'user1@example.com', password: 'password1' },
  ];
  const userInsertQuery = `INSERT INTO User (username, email, password) VALUES (?, ?, ?)`;
  users.forEach((user) => {
    db.run(userInsertQuery, [user.username, user.email, user.password], (err) => {
      if (err) {
        console.error('Error inserting user:', err.message);
      } else {
        console.log('User inserted successfully.');
      }
    });
  });

  // Close the database connection after seeding
  db.close((err) => {
    if (err) {
      console.error('Error closing SQLite database connection:', err.message);
    } else {
      console.log('Database connection closed.');
    }
  });
}
