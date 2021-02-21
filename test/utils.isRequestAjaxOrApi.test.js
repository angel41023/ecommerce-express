const assert = require('assert')
const isRequestAjaxOrApi = require('../utils/isRequestAjaxOrApi')

describe('utils - isRequestAjaxOrApi', function() {
  context('when req accepts html and is not XMLHttpRequest', function() {
    it('returns false', function(){
      const req = {
        accepts: () => true,
        xhr: false
      }
      const result = isRequestAjaxOrApi(req)
      const expected = false

      assert.strictEqual(result, expected)
    })
  })

  context('when req does not accept html and is not XMLHttpRequest', function() {
    it('returns true', function(){
      const req = {
        accepts: () => false,
        xhr: false
      }
      const result = isRequestAjaxOrApi(req)
      const expected = true

      assert.strictEqual(result, expected)
    })
  })

  context('when req accepts html and is XMLHttpRequest', function() {
    it('returns true', function(){
      const req = {
        accepts: () => true,
        xhr: true
      }
      const result = isRequestAjaxOrApi(req)
      const expected = true

      assert.strictEqual(result, expected)
    })
  })
})
