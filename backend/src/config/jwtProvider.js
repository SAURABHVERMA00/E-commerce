const jwt=require('jsonwebtoken');
const SECRET_KEY='dfkjneknrfdnkwjebfiuwbejkjcfiwe0u3o'

const generateToken= (userId) => {
    // console.log(userId);
 
    const token=jwt.sign({userId},SECRET_KEY,{expiresIn:'48h'});

    return token;
}

const getUserIdFromToken=async(token)=>{
    try {
        console.log(token);
        const decodedToken = jwt.verify(token, SECRET_KEY);
        console.log(decodedToken);
        
    
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