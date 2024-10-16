const jwtProvider=require("../config/jwtProvider");
const userService= require('../services/userService');
const authenticate= async (req, res, next) => {
    try{

        const token=req.headers.authorization?.split(" ")[1];
        if(!token){
            return res.status(401).send("Token not found");
        }

        const userId=jwtProvider.getUserIdFromToken(token);

        const user=await userService.findUserById(userId);

        req.user=user;
        
    }catch(error){
        res.status(500).send(error.message);
    }
    next();
}

module.exports = authenticate;