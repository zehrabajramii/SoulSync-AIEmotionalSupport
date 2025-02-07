const request = require('supertest');
const app = require('../index');

describe('Community Post API', () => {
    it('should save user post successfully', async () => {
        const res = await request(app)
            .post('/posts') // <-- Correct route
            .send({ text: "Feeling motivated today! 🚀", date: "2025-02-07" });

        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty('id');
        expect(res.body.text).toBe("Feeling motivated today! 🚀");
    });
});