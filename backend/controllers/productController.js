const Product = require('../models/productModel')


exports.createProduct = async(req,res) => {
    try {
         const {name ,  price , category ,discountPercentage , stock , description} = req.body

  const image = req.file.path

const product = await Product.create({
    name ,price ,category, discountPercentage,stock ,image,description})

    if(product){
        res.status(200).json({
          message : 'success' ,
          product
        })
    }

    } catch (error) {
       res.status(500).send(error) 
    }
 
  
}

exports.getProduct = async(req,res)=>{
    try {
      const product = await Product.find().populate('category')
      
      if(product){
        res.status(200).json({
            product
        })
      }
    } catch (error) {
        res.status(500).json({
            error
        })
    }
}