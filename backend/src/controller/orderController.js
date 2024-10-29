const orderService=require('../services/orderService');

const createOrder=async(req,res)=>{
    const user=await req.user;

    try{
        const createOrder=await orderService.createOrder(user,req.body);
        return res.status(201).json(createOrder);
    }catch(error){
        res.status(500).send(error.message);
    }


}

const findOrderById=async(req,res)=>{
    const user=await req.user;

    try{
        const createOrder=await orderService.findOrderById(req.params.id);
        return res.status(201).json(createOrder);
    }catch(error){
        res.status(500).send(error.message);
    }
}
const orderHistory=async(req,res)=>{
    const user=await req.user;

    try{
        const orderhis=await orderService.userOrderHistory(user._id);    
        return res.status(201).json(orderhis);
    }catch(error){
        res.status(500).send(error.message);
    }
}

module.exports={
    createOrder,
    findOrderById,
    orderHistory
}