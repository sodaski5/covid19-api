// Load environment variables from the .env file
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000; // Default to port 3000 if not specified.

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse JSON request bodies

// Import routes
const germanyRoutes = require('./routes/germany');
const statesRoutes = require('./routes/states');
const casesRoutes = require('./routes/cases');
const deathsRoutes = require('./routes/deaths');
const healthCheckRoutes = require('./routes/healthCheck');

// Define routes
app.use('/germany', germanyRoutes);
app.use('/states', statesRoutes);
app.use('/cases', casesRoutes);
app.use('/deaths', deathsRoutes);
app.use('/health', healthCheckRoutes);
app.use(express.static('public')); // Serve static assets

// Serve the HTML page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Health Check Endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy' });
});

const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = { app, server }; 
