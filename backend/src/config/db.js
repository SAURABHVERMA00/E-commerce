const mongoose = require("mongoose");

const mongoDbURI="";
const connectDB = () => {
  
  if (!mongoDbURI) {
    throw new Error("mongoDbURI environment variable is not set");
  }
  return mongoose.connect(mongoDbURI);
};

module.exports = { connectDB };
