const request = require('supertest');
const { app, server } = require('../index'); // Import the Express app and server

describe('API Endpoints', () => {
  it('GET /germany should return Germany information', async () => {
    const response = await request(app).get('/germany');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('cases');
    expect(response.body).toHaveProperty('deaths');
  });

  it('GET /cases/history should return cases history', async () => {
    const response = await request(app).get('/cases/history');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('data');
  });

  it('GET /deaths/history should return deaths history', async () => {
    const response = await request(app).get('/deaths/history');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('data');
  });

  it('GET /health should return health status', async () => {
    const response = await request(app).get('/health');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('status', 'healthy');
  });

  it('GET /states/abbreviation should return state information', async () => {
    const response = await request(app).get('/states/HH'); // Replace 'HH' with the state abbreviation
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('abbreviation', 'HH'); // Replace 'HH' with the expected abbreviation
  });
});

// After all tests, close the server.
afterAll((done) => {
  server.close(() => {
    done();
  });
});
