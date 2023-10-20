const express = require('express');
const { healthCheck } = require('../controllers/healthCheckController');
const router = express.Router();

// Route to perform health check
router.get('/', healthCheck);

module.exports = router;