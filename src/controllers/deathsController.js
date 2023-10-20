const axios = require('axios');
const ROBERT_KOCH_API_BASE_URL = process.env.ROBERT_KOCH_API_BASE_URL;

// Function to get the full history of deaths in Germany
const getDeathsHistory = async (req, res) => {
  try {
    // Construct the API URL for fetching Germany's complete deaths history
    const apiUrl = `${ROBERT_KOCH_API_BASE_URL}/germany/history/deaths`;
    const response = await axios.get(apiUrl);
    const deathsHistory = response.data;
    res.json(deathsHistory); // Respond with the retrieved deaths history data
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch deaths history' }); // Handle errors and respond with an error status
  }
};

// Function to get deaths history for a specific number of days
const getDeathsByDay = async (req, res) => {
  const { days } = req.params;
  // Construct the API URL for fetching Germany's deaths history for a specific number of days
  const apiUrl = `${ROBERT_KOCH_API_BASE_URL}/germany/history/deaths/${days}`;

  try {
    const response = await axios.get(apiUrl);
    const deathsHistory = response.data;
    res.json(deathsHistory); // Respond with the retrieved deaths history data for specific days
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch latest deaths history' }); // Handle errors and respond with an error status
  }
};

module.exports = {
  getDeathsHistory, 
  getDeathsByDay
};
