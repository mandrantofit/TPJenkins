// test/index.test.js
import chai from 'chai';
import chaiHttp from 'chai-http';
import { expect } from 'chai';
import app from '../index.js';

chai.use(chaiHttp);

describe('GET /', () => {
  it('should return Hello Jenkins CI/CD!', (done) => {
    chai.request('http://localhost:3000')
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal('Hello Jenkins CI/CD!');
        done();
      });
  });
});
