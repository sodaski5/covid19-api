const axios = require('axios');
const ROBERT_KOCH_API_BASE_URL = process.env.ROBERT_KOCH_API_BASE_URL;

// Fetch cases history for Germany
const getCasesHistory = async (req, res) => {
  try {
    // Construct the API URL for fetching Germany's cases history
    const apiUrl = `${ROBERT_KOCH_API_BASE_URL}/germany/history/cases`;
    const response = await axios.get(apiUrl);
    const casesHistory = response.data;
    res.json(casesHistory); // Respond with the retrieved cases history data
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch cases history' }); // Handle errors and respond with an error status
  }
};

// Fetch cases history for a specific number of days
const getCasesByDays = async (req, res) => {
  const { days } = req.params;
  // Construct the API URL for fetching Germany's cases history for a specific number of days
  const apiUrl = `${ROBERT_KOCH_API_BASE_URL}/germany/history/cases/${days}`;

  try {
    const response = await axios.get(apiUrl);
    const casesHistory = response.data;
    res.json(casesHistory); // Respond with the retrieved cases history data for specific days
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch cases history' }); // Handle errors and respond with an error status
  }
};

module.exports = {
  getCasesByDays,
  getCasesHistory
};
