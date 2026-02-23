const request = require('supertest');

const app = require('./app');

test('GET /', async () => {
  const res = await request(app).get('/');
  expect(res.text).toBe('Hello DevOps World!');
});