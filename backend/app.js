const express = require('express') ;
const app = express() ;
const dbConnect = require('./db')
const PORT = 3000 ;
const colors = require('colors')

//NOTE fn to connect with the mongodb
dbConnect() ;


app.use('/api',require('./routes/userRoutes'))


//listening on the server
app.listen(PORT,()=>{
    console.log(colors.yellow(`App is listening on the port:${PORT}`))
})