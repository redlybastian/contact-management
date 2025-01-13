const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

const validateToken = asyncHandler(async (req, res, next) => {
  let token;
  let authHeader = req.headers.Authorization || req.headers.authorization;
  console.log("This jwt validate");

  if (authHeader && authHeader.startsWith("Bearer")) {
    console.log("This jwt validate 2");
    token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (err) {
        res.status(401);
        throw new Error("User is not authorized");
      }
      console.log(decoded);
    });
  }
});

module.exports = validateToken;
