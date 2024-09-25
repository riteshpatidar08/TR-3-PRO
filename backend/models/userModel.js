const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt') ;
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    maxLength: 40,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: 'Please enter a Valid Email',
    },
  },
  phone: {
    type: String,
   
  },
  password: {
    type: String,
   
    validate: {
      validator: function (value) {
   if(this.googleId) return true ;
        return validator.isStrongPassword(value, {
          minLength: 8,
          minLowercase: 1,
          minUppercase: 1,
          minNumbers: 1,
          minSymbols: 1,
        });
      },
      message: 'Password must contain 1 uppercase , 1 lowercase , 1 number , 1 symbol ',
    },
  },
  role : {
    type : String,
    enum : ['admin', 'user'],
    default : 'user'
  },
  googleId : {
    type : String,
    unique : true,
    sparse : true
  }
});

userSchema.pre('save', async function(next){
  //if password is not modified we don't need to hash the password again
  if(!this.isModified('password')) next()
//if it is modified hash the password again 
this.password =  await bcrypt.hash(this.password , 12)
  next()
})

//NOTE this keyword points to the document we are going to save in the db.

const User = mongoose.model('User', userSchema);

module.exports = User;
