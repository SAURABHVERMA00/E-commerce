const jwtProvider=require("../config/jwtProvider");
const userService= require('../services/userService');
const authenticate= async (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'Authentication token is missing' });
    }
    try{

       

        const userId=jwtProvider.getUserIdFromToken(token);

        const user=await userService.findUserById(userId);

        req.user=user;
        
    }catch(error){
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ message: 'Session expired. Please log in again.' });
        }
        return res.status(401).json({ message: 'Invalid authentication token' });
        
    }
    next();
}

module.exports = authenticate;