const { User } = require("../models/user.model.js");
const bcrypt = require("bcrypt");
const jwtProvider = require("../config/jwtProvider.js");

const createUser = async (userData) => {
  try {
    let { firstName, lastName, email, password } = userData;

    if (!firstName || !lastName || !email || !password) {
      return {
        success: false,
        message: "Please fill in all fields",
      };
    }

    const isUserExist = await User.findOne({ email });

    if (isUserExist) {
      throw new Error("User already exists", email);
    }
    password = await bcrypt.hash(password, 8);

  

    const user = await User.create({
      firstName,
      lastName,
      email,
      password,
    });

    // console.log("User created successfully", user);  
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

const findUserById = async (userId) => {
  try {
    const user = await User.findById(userId)
    // .populate("address");
    if (!user) {
      throw new Error("User not found", userId);
    }
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getUserByemail = async (email) => {
  try {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("User not found", email);
    }
    return user
  } catch (error) {
    throw new Error(error.message);
  }
};

const getUserProfileByToken = async (token) => {
  try {
    
    const userId = await jwtProvider.getUserIdFromToken(token);
    
    const user = await User.findById(userId);
   
    if (!user) {
      throw new Error("User not found", userId);
    }
    return user
  } catch (error) {
    throw new Error(error.message);
  }
};

const getAllUsers = async () => {
  try {
    const users = await User.find();
    return users
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  createUser,
  findUserById,
  getUserByemail,
  getUserProfileByToken,
  getAllUsers,
};
