// Function to perform a health check
const healthCheck = (req, res) => {
  res.json({ status: 'healthy' }); // Respond with a JSON object indicating that the service is healthy
};

module.exports = {
healthCheck,
}
