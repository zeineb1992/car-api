const chai = require('chai');
const app = require('../app')

chai.use(require('chai-http'));
chai.should();

describe('Car router', function () {
    describe('Get /car', function () {
        it('should return an array of cars', function (done) {
            chai.request(app).get('/car').end((err, res) => {
                if (err) done(err);

                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
            })
        })
    })
})