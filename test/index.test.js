const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const app = require('../index'); // mais ici il faut adapter l'import

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
