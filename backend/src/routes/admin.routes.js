const express= require('express');
const router=express.Router();

const orderController=require('../controller/adminOrderController');
const authenticate = require('../middleware/authenticate');

router.get('/',authenticate,orderController.getAllOrders);
router.put('/:orderId/confirmed',authenticate,orderController.confirmedOrders);
router.put('/:orderId/ship',authenticate,orderController.shippedOrders);
router.put('/:orderId/deliver',authenticate,orderController.deliveredOrders);
router.put('/:orderId/cancel',authenticate,orderController.cancelOrders);
router.put('/:orderId/delete',authenticate,orderController.deleteOrder);


module.exports=router;
