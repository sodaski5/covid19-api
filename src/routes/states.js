const express = require('express');
const router = express.Router();
const stateController = require('../controllers/statesController');

// Route to get state data by abbreviation
router.get('/:abbreviation', stateController.getStateDataByAbbreviation);

module.exports = router;