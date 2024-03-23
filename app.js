require("dotenv").config(); 
const express = require('express');
const mongoose = require("mongoose");
const busRoutes = require('./routes/api');
const { Bus } = require("./mongoDbSchemas");


const app = express();
mongoose.connect(
  process.env.MONGODB_URI, 
  {
      useNewUrlParser: true,
      useUnifiedTopology: true
  }
);

app.use(express.json());

app.use('/api', busRoutes);
app.get('/api/v2/buses', async (req, res) => {
  try {
    const buses = await Bus.find({});
    res.json(buses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
