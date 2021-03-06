const productsMocks = [
  {
    name: "Red shoes",
    price: 75,
    image: "https://www.thegoodwillout.com/media/catalog/product/cache/bf41ca181e831641a2b4a7a9a89e5c7f/n/i/nike-air-yeezy-2-sp-red-october-508214-660-2.jpg",
    tags: ['red', 'shoes']
  },
  {
    name: "Black shoes",
    price: 125,
    image: "https://i1.adis.ws/i/office/2003131840_ld1.jpg?$highres$?fmt.jpeg.interlaced=true",
    tags: ['black', 'shoes']
  }
]
function filteredProductsMocks(tag) {
  return productsMocks.filter(product => product.tags.includes(tag))
}

class ProductsServiceMock {
  async getProducts() {
    return Promise.resolve(productsMocks)
  }

  async createProduct() {
    return Promise.resolve('6bedb1267d1ca7f3053e2875')
  }
}
module.exports = {
  productsMocks,
  filteredProductsMocks,
  ProductsServiceMock
}
