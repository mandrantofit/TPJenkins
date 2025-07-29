import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index.js';

const expect = chai.expect;
chai.use(chaiHttp);

describe('POST /number', () => {
  it('should accept integer number', done => {
    chai.request(app)
      .post('/number')
      .send({ value: 3 })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('message', 'Received number: 3');
        done();
      });
  });

  it('should reject string value', done => {
    chai.request(app)
      .post('/number')
      .send({ value: "trois" })
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body).to.have.property('error', 'Value must be a number');
        done();
      });
  });
});
