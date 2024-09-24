const mongoose = require('mongoose') ;

const productSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true , 'Name is required']
    },
    price : {
        type : Number ,
        required : [true , 'Price is required']
    }
    ,
    image : {
        type : String ,
    
    },
    category : {
        type : Schema.Types.ObjectId ,
        ref : 'Category' ,
    },
    
    description : {
        type : String,
       
    },
    stock : {
        type : Number ,
        default : 0
    },
    discountPercantage : {
        type : Number,
        
    }
})

const Product = mongoose.model('Product',productSchema)

module.exports = Product