const express = require('express') ;
const app = express() ;
const dbConnect = require('./db')
const PORT = 3000 ;

//NOTE fn to connect with the mongodb
dbConnect() ;



//listening on the server
app.listen(PORT,()=>{
    console.log(`App is listening on the port:${PORT}`)
})