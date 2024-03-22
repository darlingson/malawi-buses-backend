const express = require('express');
const busRoutes = require('./routes/api');


const app = express();

app.use(express.json());

app.use('/api', busRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
