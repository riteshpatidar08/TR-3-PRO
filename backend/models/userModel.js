const mongoose = require('mongoose');
const validator = require('validator')
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    maxLength: 40,
  },
  email: {
    type : String ,
    required : [true , 'Email is required'],
    unique : true,
    validate : {
        validator :  validator.isEmail ,
        message : "Please enter a Valid Email"
    }
  },
});

const User = mongoose.model('User', userSchema);
module.exports = User;
