const express = require('express');
const Product = require('../models/product');
const router = express.Router();


router.get('/', async (req, res) => {
  try {
    const productList = await Product.find();

    // sending products to the client
    res.status(200).json({
      success: true,
      productCount: productList.length,
      productList
    });
  } catch (error) {
    // no products found?
    res.status(404).json({
     success: false,
     message: 'No products found'
   });
 }
});

router.post('/new', async (req, res) => {

  // define new product w/ user data
  const product = new Product({
    name: req.body.name,
    image: req.body.image,
    countInStock: req.body.countInStock
  });

  try {
    // save new product in the database
    await product.save();

    res.status(201).json({
      success: true,
      message: 'Product created successfully',
      product
    });
  } catch (error) {
    res.status(500).json({
        success: false,
        message: 'Failed to create new product',
        error
    });
  }
});

module.exports = router;