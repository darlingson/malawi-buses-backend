const sqlite3 = require('sqlite3').verbose();

// Connect to SQLite database
const db = new sqlite3.Database('./data/mydatabase.db', (err) => {
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
    { name: 'Bus 1' },
    { name: 'Bus 2' },
    { name: 'Bus 3' }
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
    { start: 'Start 1', destination: 'Destination 1', takeoffTime: '2024-03-22 08:00', arrivalTime: '2024-03-22 12:00', price: 10 },
    { start: 'Start 2', destination: 'Destination 2', takeoffTime: '2024-03-22 09:00', arrivalTime: '2024-03-22 13:00', price: 15 },
    { start: 'Start 3', destination: 'Destination 3', takeoffTime: '2024-03-22 10:00', arrivalTime: '2024-03-22 14:00', price: 20 }
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
    { username: 'user2', email: 'user2@example.com', password: 'password2' },
    { username: 'user3', email: 'user3@example.com', password: 'password3' }
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
