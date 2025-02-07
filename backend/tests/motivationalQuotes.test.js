const request = require('supertest');
const app = require('../index');

describe('Motivational Quote API', () => {
    it('should return a motivational response', async () => {
        const res = await request(app)
            .post('/generate-motivation')
            .send({ text: "I feel sad and overwhelmed." });

        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty('motivation');
        expect(res.body.motivation.length).toBeGreaterThan(10);
    }, 30000);  // <-- Increased timeout to 30 seconds
});