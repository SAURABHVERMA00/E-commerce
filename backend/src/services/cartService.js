const Cart = require('../models/cartModel.model.js');

async function createCart(userId) {
    try{
        const cart=new Cart({
            userId
        })
        const createdCart=await cart.save();
        return createdCart;
    }
    catch(error){
        throw new Error(error.message);
    }


    
}

module.exports={createCart}