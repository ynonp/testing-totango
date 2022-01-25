const request = require('supertest');
const app = require('../app');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

describe('index router', () => {
  it('works', async () => {
    const res = await request(app).get('/').expect(200);
    const dom = new JSDOM(res.text);
    const title = dom.window.document.querySelector("title").textContent
    expect(title).toEqual("Express");
  });

  it('sends JSON when accepts JSON', async () => {
    const res = await request(app)
      .get('/')
      .set('Accept', 'application/json')
      .expect(200);

    expect(res.body).toEqual({title: 'Express'});
  });
});

