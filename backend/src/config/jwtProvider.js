const jwt=require('jsonwebtoken');

const SECRET_KEY='';
const generateToken= (userId) => {
    
    

    const token= jwt.sign({userId:userId},SECRET_KEY,{expiresIn:'48h'});
    
    return token;
}

const getUserIdFromToken=(token)=>{
    try {
      
        const decodedToken =  jwt.verify(token,SECRET_KEY);
        
        return decodedToken.userId;
      } catch (error) {
        console.error('Error verifying token:', error);
        throw new Error('Invalid token');
      }
}


module.exports={
    generateToken,
    getUserIdFromToken
}