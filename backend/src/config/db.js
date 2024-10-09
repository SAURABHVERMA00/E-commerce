const mongoose = require('mongoose');

const mongoDbURL="";

const connectDB=()=>{
    return mongoose.connect(mongoDbURL );
}


module.exports={connectDB};