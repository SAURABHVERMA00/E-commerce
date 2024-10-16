const express= require('express');
const router=express.Router();

const reviewController=require('../controller/reviewController');
const authenticate = require('../middleware/authenticate');

router.post('/',authenticate,reviewController.createReview);
router.get('/product/:productId',authenticate,reviewController.getAllReviews);

module.exports=router;
