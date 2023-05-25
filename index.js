import express from 'express'
import ProductsController from './src/controllers/products.controller.js'

const server = express()

// instance of ProductsController
const productController = new ProductsController()

server.use(express.static('src/views'))
server.get('/', productController.getProducts)

server.listen(3400)
