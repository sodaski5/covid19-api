const axios = require('axios');
const ROBERT_KOCH_API_BASE_URL = process.env.ROBERT_KOCH_API_BASE_URL;

// Function to get state data by abbreviation
const getStateDataByAbbreviation = async (req, res) => {
  const { abbreviation } = req.params;
  const url = `${ROBERT_KOCH_API_BASE_URL}/states/${abbreviation}`;

  try {
    // Send a GET request to the Robert Koch API to retrieve state data by abbreviation
    const response = await axios.get(url);
    const stateData = response.data.data[abbreviation];
    res.json(stateData); // Respond with the retrieved state data
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: `Failed to fetch data for state with abbreviation ${abbreviation}` }); // Handle errors and respond with an error status
  }
};

module.exports = {
  getStateDataByAbbreviation,
}
