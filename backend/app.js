const express = require('express');
const app = express();
const dbConnect = require('./db');
const passport = require('passport')
const PORT = 3000;
const colors = require('colors');
require('dotenv').config()
const cors = require('cors')
require('./config/passportConfig')
app.use(cors())

app.use(passport.initialize())
app.use(passport.session())
//NOTE fn to connect with the mongodb
dbConnect();

//NOTE middleware to parse the req.body data
app.use(express.json());

//NOTE Routes middleware
app.use('/api', require('./routes/userRoutes'));
app.use('/api',require('./routes/categoryRoutes'
))

//NOTE GLOBAL ROUTES HANDLER (middleware)
app.use((req, res, next) => {
  res.status(404).json({
    error: `Requested url ${req.url} not found`,
  });
  next();
});

//global error handler for our app this will send response for all the errors in our app

//listening on the server
app.listen(PORT, () => {
  console.log(colors.yellow(`App is listening on the port:${PORT}`));
});
