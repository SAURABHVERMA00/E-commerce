const paymentService = require('../services/paymentService');

const createPaymentLink=async (req,res)=>{
    try{
        const paymentLink=await paymentService.createPaymentLink(req.params.id); 
        
        return res.status(200).json(paymentLink);
    }catch(err){
        res.status(400).json({message:err.message});
    }
}

const updatePaymentInformation=async (req,res)=>{
    try{
        await paymentService.updatePaymentInformation(req.query); 
        
        return res.status(200).json({message:"Payment information updated successfully",status:true});
    }catch(err){
        res.status(400).json({message:err.message});
    }
}

module.exports = {
    createPaymentLink,
    updatePaymentInformation
}