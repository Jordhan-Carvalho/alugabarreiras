const express = require('express');
const connectDB = require('./db');

const app = express();

// Connect DB
connectDB();

app.get('/', (req, res) => {
  res.send('Hello World');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Connected on port ${PORT}`));
