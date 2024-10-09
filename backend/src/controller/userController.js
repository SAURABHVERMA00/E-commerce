const userService=require('../services/userService.js');

const getUserProfile=async(req,res)=>{
    try{
        const jwt=req.headers.authorization?.split(" ")[1];

        if(!jwt){
            return res.status(404).json({message:"token not found"});
        }

        const user=await userService.getUserProfileByToken(jwt);    
        return res.status(200).send(user);




    }catch(error){
        res.status(500).json({message:error.message});
    }
 
}

const getAllUsers=async(req,res)=>{
    try{
        const users=await userService.getAllUsers();
        res.status(200).send(users);
    }catch(error){
        res.status(500).json({message:error.message});
    }
}


module.exports={getUserProfile,getAllUsers}