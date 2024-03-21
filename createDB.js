const sqlite3 = require('sqlite3').verbose();
const { bookingSchema, routeSchema, busSchema, userSchema } = require('./schemas');

function createDatabase() {
  const db = new sqlite3.Database('./data/mydatabase.db', (err) => {
    if (err) {
      console.error('Error connecting to SQLite database:', err.message);
    } else {
      console.log('Connected to SQLite database.');
    }
  });

  db.serialize(() => {
    db.run(bookingSchema, (err) => {
      if (err) {
        console.error('Error creating Booking table:', err.message);
      } else {
        console.log('Booking table created successfully.');
      }
    });

    db.run(routeSchema, (err) => {
      if (err) {
        console.error('Error creating Route table:', err.message);
      } else {
        console.log('Route table created successfully.');
      }
    });

    db.run(busSchema, (err) => {
      if (err) {
        console.error('Error creating Bus table:', err.message);
      } else {
        console.log('Bus table created successfully.');
      }
    });

    db.run(userSchema, (err) => {
      if (err) {
        console.error('Error creating User table:', err.message);
      } else {
        console.log('User table created successfully.');
      }
    });
  });

  db.close((err) => {
    if (err) {
      console.error('Error closing SQLite database connection:', err.message);
    } else {
      console.log('Database connection closed.');
    }
  });
}

createDatabase();
