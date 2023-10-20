const axios = require('axios');
const apiBaseUrl = process.env.ROBERT_KOCH_API_BASE_URL;

// Function to get Germany metrics
const getGermanyData = async (req, res) => {
  try {
    // Send a GET request to the Robert Koch API to retrieve Germany metrics
    const response = await axios.get(`${apiBaseUrl}/germany`);
    const germanyInfo = response.data;
    res.json(germanyInfo); // Respond with the retrieved Germany metrics
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch Germany metrics' }); // Handle errors and respond with an error status
  }
};

module.exports = {
  getGermanyData,
}
