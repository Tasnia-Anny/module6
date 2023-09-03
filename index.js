// index.js

const express = require('express');
const app = express();
const apiRouter = require('./src/Routes/api');

// Middleware for JSON parsing
app.use(express.json());

// Use the API router
app.use('/api', apiRouter);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
