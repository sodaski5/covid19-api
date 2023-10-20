const express = require('express');
const router = express.Router();
const casesController = require('../controllers/casesController');

// Route to get cases history for Germany
router.get('/history', casesController.getCasesHistory);

// Route to get cases history for a specific number of days
router.get('/history/:days', casesController.getCasesByDays);

module.exports = router;