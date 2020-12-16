const express = require('express')
const ProductsService = require('../../services/products')
const router = express.Router()

const productService = new ProductsService

router.get('/', async (req, res, next) => {
  const { tags } = req.query

  try{
    const products = await productService.getproducts({ tags })
    res.render("./products/products", { products })
  }catch(err){
    next(err)
  }
})

module.exports = router
