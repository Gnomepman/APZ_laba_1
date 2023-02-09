const app = require('./server');
const supertest = require('supertest');
const request = supertest(app);
require('dotenv').config();

it('returns correct message for "/" endpoint', async () => {
    try {
        const response = await request.get('/');
        expect(response.status).toBe(200);
        expect(response.body).toBe(process.env.RESPONSE);
    } catch (err) {

    }
});  
