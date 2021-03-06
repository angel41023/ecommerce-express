const express = require('express')
const passport = require('passport')
const ProductsService = require('../../services/products')

const validation = require('../../utils/middlewares/validationHandler')

const {
  productIdSchema,
  productTagSchema,
  createProductSchema,
  updateProductSchema
} = require('../../utils/schemas/products')

//JWT strategy
require('../../utils/auth/strategies/jwt')


function productsApi(app){
  const router = express.Router()
  app.use("/api/products", router)
  const productService = new ProductsService()

  router.get('/', async (req, res, next) => {
    const { tags } = req.query

    try{
      const products = await productService.getProducts({ tags })
    
      res.status(200).json({
        data: products, 
        message: 'products listed'
      })
    }catch(err){
      next(err)
    }
  })

  router.get('/:productId', async (req, res, next) => {
    const { productId } = req.params

    try{
      const product = await productService.getProduct({ productId })
    
      res.status(200).json({
        data: product, 
        message: 'product retrieved'
      })
    }catch(err){
      next(err)
    }
  })

  router.post('/', validation(createProductSchema), async (req, res, next) => {
    const { body: product } = req

    try{
      const createdProduct = await productService.createProduct({ product })
    
      res.status(201).json({
        data: createdProduct, 
        message: 'product created'
      })
    }catch(err){
      next(err)
    }
  })

  router.put('/:productId',
    passport.authenticate('jwt', { session: false }),
    validation({productId: productIdSchema}, "params"), 
    validation(updateProductSchema), 
    async (req, res, next) => {
    const { productId } = req.params
    const { body: product } = req

      try{
        const updatedProduct = await productService.updateProduct({ productId, product })
      
        res.status(200).json({
          data: updatedProduct, 
          message: 'product updated'
        })
      }catch(err){
        next(err)
      }
  })

  router.delete('/:productId',
    passport.authenticate('jwt', { session: false }),
    async (req, res, next) => {
    const { productId } = req.params

    try{
      const product = await productService.deleteProduct({ productId })
    
      res.status(200).json({
        data: product, 
        message: 'product deleted'
      })
    }catch(err){
      next(err)
    }
  })
}
module.exports = productsApi
