const express = require("express");
const {
  registerUser,
  userLogin,
  currentUserInformation,
} = require("../controllers/userController");

const validateToken = require("../middleware/validateTokenHandler");

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", userLogin);

router.get("/current", validateToken, currentUserInformation);

module.exports = router;
