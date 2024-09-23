const User = require('./../models/userModel')
const bcrypt = require('bcrypt')

exports.register = async(req,res) => {
   try {
      const {email} = req.body 
const isExistingUser = await User.findOne({email}) ;

if(isExistingUser){
  return   res.status(400).send("User already exists , Please try with different Email")
}
const user = await User.create(req.body)
if(user){
   return  res.status(201).json({
          message : "User created Successfully",
          data : user
     })
}
   } catch (error) {
     res.status(400).send(error)
   }
}


exports.login = async(req,res) => {
try {
     //step1 check email if user exists
const {email , password} = req.body ;
const user = await User.findOne({email})
console.log(user)
if(!user){
     return res.status(400).send('User is not registered , Please register and try again')
}
     //step2 match the password
const isPasswordMatch = await bcrypt.compare(password , user.password)

if(!isPasswordMatch){
   return  res.status(400).send("Password do not match")
}

res.status(200).json({
     message : "Login Successfull"
})

} catch (error) {
     res.status(400).send(error)
}
}


// model=>controller=>routes=>app.js