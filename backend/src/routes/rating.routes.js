const express= require('express');
const router=express.Router();

const ratingController=require('../controller/ratingController');
const authenticate = require('../middleware/authenticate');

router.post('/',authenticate,ratingController.createRating);
router.get('/product/:productId',authenticate,ratingController.getAllRatings);

module.exports=router;