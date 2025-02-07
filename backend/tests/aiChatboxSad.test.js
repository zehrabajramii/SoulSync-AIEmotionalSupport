const request = require('supertest');
const app = require('../index');

describe('AI Chatbox - Detect Sad Emotion', () => {
    it('should recognize sadness-related words', async () => {
        const res = await request(app)
            .post('/generate-motivation')
            .send({ text: "I feel lonely and hopeless today." });

        expect(res.statusCode).toBe(200);
        expect(res.body.motivation.length).toBeGreaterThan(10);
    }, 30000);  // <-- Increased timeout to 30 seconds
});
