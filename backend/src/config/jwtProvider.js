const jwt=require('jsonwebtoken');
const SECRET_KEY='dfkjneknrfdnkwjebfiuwbejkjcfiwe0u3o'
const generateToken= (userId) => {
    const token=jwt.sign({userId},SECRET_KEY,{expiresIn:'48h'});

    return token;
}

const getUserIdFromToken=async(token)=>{
    const decodedToken=jwt.verify(token,SECRET_KEY);

    return decodedToken.userId;
}


module.exports={
    generateToken,
    getUserIdFromToken
}