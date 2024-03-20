const express = require('express');
const mongoose = require('mongoose');
const busRoutes = require('./routes/busRoutes');
const config = require('./config');

const app = express();

mongoose.connect(config.dbURL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(express.json());

app.use('/api',api);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
