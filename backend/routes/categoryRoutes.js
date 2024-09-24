const express = require('express') ;
const categoryController = require('../controllers/categoryController')
const router = express.Router() ;


router.post('/createcategory', categoryController.createCategory) ;

module.exports = router ;