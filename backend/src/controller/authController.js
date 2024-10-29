const userService = require("../services/userService.js");
const jwtProvider = require("../config/jwtProvider.js");
const bcrypt = require("bcrypt");
const cartService = require("../services/cartService.js");

const register = async (req, res) => {
  try {
    const user = await userService.createUser(req.body);
    const token =  jwtProvider.generateToken(user._id);
    console.log(user._id)
    await cartService.createCart(user._id);

    res
      .status(201)
      .json({ message: "User created successfully", user, token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userService.getUserByemail(email);
    console.log(user)
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    
    
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    
    
    const token =  jwtProvider.generateToken(user._id);

    res
      .status(200)
      .send({ message: "User logged in successfully", data: user, token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { register, login };
