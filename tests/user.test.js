const request = require('supertest');
const API_URL = 'http://localhost:5000'; // Running backend container

describe('User Authentication Tests', () => {
    it('should return 400 for missing username and password', async () => {
        const response = await request(API_URL)
            .post('/login')
            .send({ username: 'eishaq', password: '123' });
        expect(response.status).toBe(200);
    });
});

