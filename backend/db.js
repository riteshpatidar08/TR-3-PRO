const mongoose = require('mongoose') ;


const dbConnect = async () => {
  try {
    const conn = await mongoose.connect('mongodb://localhost:27017/shoppingApp')
    console.log('Connection is Successfull')
  } catch (error) {
    console.log(error)
  }
}

module.exports = dbConnect ;