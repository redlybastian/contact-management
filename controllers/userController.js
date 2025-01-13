const asyncHandler = require("express-async-handler");

const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

const User = require("../models/userModels");

// @dec Register a user
// @route POST /api/users/register
// @access public
// @Note this function not change/ the error messages because for the throw err is sent multiple response. nodejs not allow for it
const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    // return res.status(400).json({ error: "All fields are mandatory" });

    res.status(400);
    throw new Error("All fields are mandatory");
  }
  const userAvailable = await User.findOne({ email });
  if (userAvailable) {
    res.status(400);
    throw new Error("User already registered");
  }

  //   Hash password
  const hashPassword = await bcrypt.hash(password, 10);
  // console.log("Hash Password : ", hashPassword);

  const user = await User.create({
    username,
    email,
    password: hashPassword,
  });

  console.log(`User created ${user}`);
  if (user) {
    res.status(201).json({
      message: "Register the user",
      _id: user.id,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("User data not valid");
  }

  // res.json({
  //   message: "Register the user",
  // });
});

// @dec User login
// @route POST /api/users/login
// @access public
const userLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory!");
  }
  const user = await User.findOne({ email });
  // compare password with hashing password
  if (user && (await bcrypt.compare(password, user.password))) {
    const accessToken = jwt.sign(
      {
        user: {
          username: user.username,
          email: user.email,
          id: user.id,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "1m" }
    );
    res.status(200).json({ accessToken });
  } else {
    res.status(401);
    throw new Error("email or password is not valid");
  }
});

// @dec Current user ifo
// @route GET /api/users/current
// @access public
const currentUserInformation = asyncHandler(async (req, res) => {
  res.json({
    message: "current user information",
  });
});

module.exports = { registerUser, userLogin, currentUserInformation };
