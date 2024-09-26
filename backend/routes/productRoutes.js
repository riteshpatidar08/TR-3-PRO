const express = require('express')
const router = express.Router() ;

const productController = require('./../controllers/productController')
const upload = require('./../middleware/upload')

router.post('/addProduct', upload.single('image') , productController.createProduct)
router.get('/getproducts', productController.getProduct)

module.exports = router