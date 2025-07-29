import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index.js';

chai.use(chaiHttp); // 👉 ajoute cette ligne
const expect = chai.expect;
const request = chai.request; // 👈 ici, après chai.use()

describe('GET /', () => {
  it('should return Hello Jenkins CI/CD!', async () => {
    const res = await request(app).get('/');
    expect(res).to.have.status(200);
    expect(res.text).to.equal('Hello Jenkins CI/CD!');
  });
});
