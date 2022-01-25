const api = require('../lib/githubapi');
const request = require('supertest');
const app = require('../app');

describe('externaldata', () => {
  it('Creates the right string output', async () => {
    jest.spyOn(api, 'getNumberOfFollowers').mockResolvedValue(10);
    const res = await request(app).get('/github/ynonp').expect(200);
    expect(res.text).toMatch(/User (\w+) has 10 followers/);
  });

  it('Parses username correctly', async () => {
    const spy = jest.spyOn(api, 'getNumberOfFollowers').mockResolvedValue(10);
    await request(app).get('/github/ynonp').expect(200);

    expect(spy).toHaveBeenCalledWith('ynonp');
  });
});

