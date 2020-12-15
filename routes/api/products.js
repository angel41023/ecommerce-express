const express = require('express')
const productsMocks = require('../../utils/mocks/products')
const router = express.Router()

router.get('/', (req, res) => {
  const { query } = req.query
  res.status(200).json({
    data: productsMocks, 
    message: 'products listed'
  })
})

router.get('/:productId', (req, res) => {
  const { productId } = req.params
  res.status(200).json({
    data: productsMocks[0], 
    message: 'product retrieved'
  })
})

router.post('/', (req, res) => {
  res.status(201).json({
    data: productsMocks[0], 
    message: 'product created'
  })
})

router.put('/:productId', (req, res) => {
  res.status(200).json({
    data: productsMocks, 
    message: 'product updated'
  })
})

router.delete('/', (req, res) => {
  res.status(200).json({
    data: productsMocks, 
    message: 'product deleted'
  })
})

module.exports = router
