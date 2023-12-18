const express = require('express');
const {insertMany,createProduct,deleteMany, singleProduct,allProducts} = require('../controller/productController')
const router = express.Router();

//create many products route
router.post('/many',insertMany);

//create a product
router.post('/product',createProduct)

//delete a post
router.delete('/manyn',deleteMany)

//single product
router.get('/:productId',singleProduct)

//all products
router.get('/',allProducts)



module.exports = router;