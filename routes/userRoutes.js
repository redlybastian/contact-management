const express = require("express");
const {
  registerUser,
  userLogin,
  currentUserInformation,
} = require("../controllers/userController");

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", userLogin);

router.get("/current", currentUserInformation);

module.exports = router;
