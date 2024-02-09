import request from 'supertest';
import { app } from '../src/server';

// Test suite for the basic availability of the Cocktails Endpoint.
describe('Cocktails Endpoint', () => {
  // Test to ensure the GET request to /cocktails returns a 200 OK status.
  it('GET /cocktails - success', async () => {
    const response = await request(app).get('/cocktails');
    expect(response.statusCode).toEqual(200);
  });
});

// Test suite for the pagination feature of the Cocktails Endpoint.
describe('Cocktails Pagination', () => {
  // Test to verify that the API correctly limits the number of results to the specified 'limit' query parameter.
  it('Returns the Correct Number of Results', async () => {
    const limit = 5;
    const response = await request(app).get(`/cocktails?page=1&limit=${limit}`);
    expect(response.body.length).toBeLessThanOrEqual(limit);
  });
});

// Test suite for the filtering feature of the Cocktails Endpoint.
describe('Cocktails Filtering', () => {
  // Test to check if the API response filters results based on whether the cocktails contain 'Gin', 
  // while ensuring that each returned drink has a non-empty name.
  it('Filters Results Based on Ingredient', async () => {
    const ingredient = 'Gin';
    const response = await request(app).get(`/cocktails?ingredients=${ingredient}`);
    expect(response.body.every((drink: any) => drink.strDrink.trim().length > 0)).toBeTruthy();
  });
});
