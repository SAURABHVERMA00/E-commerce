const mongoose=require('mongoose');

const cartSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users'
    },
    cartItems:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"cartItems",
        required:true
    }],
    totalPrices:{
        type:Number,
        required:true,
        default:0
    },
    totalItems:{
        type:Number,
        required:true,
        default:0
    },
    totalDiscountedPrice:{
        type:Number,
        required:true,
        default:0
    },
    discount:{
        type:Number,
        required:true,
        default:0
    }
})

const Cart=mongoose.model('carts',cartSchema);

module.exports=Cart