const express=require('express');
const router=express.Router();

const authenticateJWT=require('../middleware/authenticate');

const paymentController=require('../controller/paymentController');


router.post('/:id',authenticateJWT,paymentController.createPaymentLink);
router.get('/',authenticateJWT,paymentController.updatePaymentInformation);

module.exports=router;


