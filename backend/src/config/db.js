const mongoose = require('mongoose');

const mongoDbURL="mongodb+srv://saurabh2271be22:3GXTWJUgoP6PFPCv@cluster0.hs9twnu.mongodb.net/ecommerce?retryWrites=true&w=majority";

const connectDB=()=>{
    return mongoose.connect(mongoDbURL );
}


module.exports={connectDB};