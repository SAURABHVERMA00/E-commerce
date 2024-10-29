const cartItemService=require('../services/cartItemService');

const updateCartItem=async(req,res)=>{
    const user=await req.user;

    try{
        const updatedCartItem=await cartItemService.updateCartItem(user._id,req.params.id,req.body);

        return res.status(200).json(updatedCartItem);


    }catch(error){
        res.status(500).send(error.message);
    }
}


const  removeCartItem=async(req,res)=>{
    const user=await req.user;
    try{
        
        const cartItem=await cartItemService.removeCartItem(user._id,req.params.id);
        return res.status(200).json({message:'Item removed from cart Successfully',cartItem});
    }catch(error){
        res.status(500).send(error.message);
    }
}


module.exports={    
    updateCartItem,
    removeCartItem
}