const Category = require('./../models/categoryModel') ;

exports.createCategory = async(req,res,next)=>{
    try {
         const category = await Category.create(req.body)
         res.status(201).json({
            message : 'success',
            data : category
         })
    } catch (error) {
        next(error)
    }
   
}