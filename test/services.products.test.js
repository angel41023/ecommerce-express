const assert = require('assert')
const proxyquire = require('proxyquire')

const {
  MongoLibMock,
  getAllStub,
  createStub
} = require('../utils/mocks/mongoLib')

const {
  productsMocks,
  filteredProductsMocks
} = require('../utils/mocks/products')

describe('services - products', function() {
  const ProductsService = proxyquire('../services/products', {
    '../lib/mongo': MongoLibMock
  })

  const productsService = new ProductsService()

  describe('#getProducts', async function() {
    it('calls the getAll MongoLib method', async function() {
      await productsService.getProducts({})
      assert.strictEqual(getAllStub.called, true)
    })

    it('returns an array of products', async function() {
      const result = await productsService.getProducts({})
      const expected = productsMocks
      assert.deepEqual(result, expected)
    })

    context('with tags', async function() {
      it('calls the getAll with args', async function() {
        await productsService.getProducts({ tags: ['shoes'] })
        const tagQuery = { tags: { $in: ['shoes'] } }
        assert.strictEqual(getAllStub.calledWith('products', tagQuery), true)
      })

      it('returns an array of products filtered by the tag', async function() {
        const result = await productsService.getProducts({ tags: ['shoes'] })
        const expected = filteredProductsMocks('shoes')
        assert.deepEqual(result, expected)
      })
    })
  })

})
