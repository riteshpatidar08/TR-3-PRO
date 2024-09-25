const express = require('express') ;
const userController = require('./../controllers/userController')
const passport = require('passport')
const router = express.Router() ;

router.post('/register',userController.register)
router.post('/login',userController.login)

router.get('/auth/google' , passport.authenticate('google' , {scope: ['profile', email]}))


module.exports = router ;
