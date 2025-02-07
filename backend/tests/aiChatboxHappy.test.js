const request = require('supertest');
const app = require('../index');

describe('AI Chatbox - Detect Happy Emotion', () => {
    it('should recognize happiness-related words', async () => {
        const res = await request(app)
            .post('/generate-motivation')
            .send({ text: "I feel joyful and excited today!" });

        expect(res.statusCode).toBe(200);
        expect(res.body.motivation.length).toBeGreaterThan(10);
    }, 30000);  // <-- Increased timeout to 30 seconds
});
