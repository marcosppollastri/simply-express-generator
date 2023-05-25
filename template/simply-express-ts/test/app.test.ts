//This is an example test, feel free to create as many tests as you want

import * as request from 'supertest';
import {app, server} from '@src/app'


describe('App', () => {

  afterAll(() => {
    server.close()
    // Close the server connection after all test
  });

  it('GET / should return "Hello World!"', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello World!');
  });
});
