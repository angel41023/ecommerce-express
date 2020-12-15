const express = require('express')
const productsMocks = require('../utils/mocks/products')

const router = express.Router()

router.get('/', (req, res) => {
  res.render("./products/products", { productsMocks })
})

module.exports = router
