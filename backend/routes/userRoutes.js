const express = require('express') ;
const userController = require('./../controllers/userController')
const passport = require('passport')
const router = express.Router() ;

router.post('/register',userController.register)
router.post('/login',userController.login)

router.get('/auth/google' , passport.authenticate('google' , {scope: ['profile', 'email']})) ;

router.get('/auth/google/callback' , passport.authenticate('google' , {failureRedirect : '/login', session : false}),userController.GoogleAuth)

module.exports = router ;
