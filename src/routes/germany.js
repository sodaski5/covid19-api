const express = require('express');
const router = express.Router();
const { getGermanyData } = require('../controllers/germanyController');

// Route to get Entire Germany information
router.get('/', getGermanyData);

module.exports = router;