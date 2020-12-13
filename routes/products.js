const express = require('express')
const router = express.Router()

const products = [
  {
    name: "Red shoes",
    price: 75,
    image: "https://www.thegoodwillout.com/media/catalog/product/cache/bf41ca181e831641a2b4a7a9a89e5c7f/n/i/nike-air-yeezy-2-sp-red-october-508214-660-2.jpg"
  },
  {
    name: "Black shoes",
    price: 125,
    image: "https://i1.adis.ws/i/office/2003131840_ld1.jpg?$highres$?fmt.jpeg.interlaced=true"
  }
]

router.get('/', (req, res) => {
  res.render("products", { products })
})

module.exports = router