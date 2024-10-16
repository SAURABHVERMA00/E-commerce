const orderService=require('../services/orderService');

async function getAllOrders(req,res){
    try{
        const orders=await orderService.getAllOrder();
        res.status(200).json(orders);
    }catch(error){
     
        res.status(500).send({error:error.message});
    }
}

async function confirmedOrders(req,res){

    const orderId=req.params.orderId;   
    try{
        const orders=await orderService.confirmedOrder(orderId);
        res.status(200).json(orders);
    }catch(error){
     
        res.status(500).send({error:error.message});
    }
}

async function shippedOrders(req,res){
    const orderId=req.params.orderId;   
    try{
        const orders=await orderService.shippedOrder(orderId);
        res.status(200).json(orders);
    }catch(error){
     
        res.status(500).send({error:error.message});
    }
}

async function deliveredOrders(req,res){
    const orderId=req.params.orderId;   
    try{
        const orders=await orderService.deliverOrder(orderId);
        res.status(200).json(orders);
    }catch(error){
     
        res.status(500).send({error:error.message});
    }
}

async function cancelOrders(req,res){
    const orderId=req.params.orderId;   
    try{
        const orders=await orderService.cancelOrder(orderId);
        res.status(200).json(orders);
    }catch(error){
     
        res.status(500).send({error:error.message});
    }
}

async function deleteOrder(req,res){
    const orderId=req.params.orderId;   
    try{
        const orders=await orderService.deleteOrder(orderId);
        res.status(200).json(orders);
    }catch(error){
     
        res.status(500).send({error:error.message});
    }
}
module.exports={
    getAllOrders,
    confirmedOrders,
    shippedOrders,
    deliveredOrders,
    cancelOrders,
    deleteOrder
}