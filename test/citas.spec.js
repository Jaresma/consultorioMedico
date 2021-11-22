const request = require('supertest')
const app = require('../src/app')
const expect = require('chai').expect

describe('GET /citas endpoint', () => {

  it('GET /citas endpoint successfully returns response', () => {
    return request(app)
      .get('/citas')
      .then((response) => {
        expect(response.statusCode).to.equal(200)
        expect(response.body)
          .to.be.an.instanceof(Array)
          .and.to.have.length(4)
          .and.to.have.property(0)
          .that.includes.all.keys(['id', 'title', 'pacient_id'])
      })
  })
})
