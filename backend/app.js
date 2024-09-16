const express = require('express') ;
const app = express() ;
const dbConnect = require('./db')
const PORT = 3000 ;

// const validator = require('validator') ;
// console.log(validator.isStrongPassword('Hello@123',{
//      minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1, 
// }))
//NOTE fn to connect with the mongodb
dbConnect() ;



//listening on the server
app.listen(PORT,()=>{
    console.log(`App is listening on the port:${PORT}`)
})