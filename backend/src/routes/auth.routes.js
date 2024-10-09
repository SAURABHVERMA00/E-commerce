const express=require('express');

const router=express.Router();

const authController=require('../controller/authController.js');

router.get('/signup',authController.register);
router.get('/signin',authController.login);

module.exports=router;
