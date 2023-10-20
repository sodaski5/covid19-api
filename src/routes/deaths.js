const express = require('express');
const router = express.Router();
const deathsController = require('../controllers/deathsController');

// Route to get deaths history for Germany
router.get('/history', deathsController.getDeathsHistory);

// Route to get deaths history for a specific number of days
router.get('/history/:days', deathsController.getDeathsByDay);

module.exports = router;