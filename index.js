// Load environment variables from the .env file
require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Routes
app.use('/germany', require('./src/routes/germany'));
app.use('/states', require('./src/routes/states'));
app.use('/cases', require('./src/routes/cases'));
app.use('/deaths', require('./src/routes/deaths'))
app.use('/health', require('./src/routes/healthCheck'));

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'API is healthy' });
});

// Handle unhandled routes
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = { app, server }; // Export the app and server for testing
