const assert = require('assert')
const proxyquire = require('proxyquire')

const {
  productsMocks,
  ProductsServiceMock
} = require('../utils/mocks/products')

const testServer = require('../utils/testServer')

describe('routes - api - products', function() {
  const route = proxyquire('../routes/api/products', {
    '../../services/products': ProductsServiceMock
  })

  const request = testServer(route)

  describe('GET /products', function() {
    const PRODUCTS_PATH = '/api/products'

    it('responds with status 200', function(done) {
      request.get(PRODUCTS_PATH).expect(200, done)
    })

    it('responds with content type json', function(done) {
      request.get(PRODUCTS_PATH).expect('Content-type', /json/, done)
    })

    it('responds with not error', function(done) {
      request.get(PRODUCTS_PATH).end((err, res) => {
        assert.strictEqual(err, null)
        done()
      })
    })

    it('responds with the list of products', function(done){
      request.get(PRODUCTS_PATH).end((err, res) => {
        assert.deepEqual(res.body, {
          data: productsMocks,
          message: 'products listed'
        })
        done()
      })
    })
  })
})
