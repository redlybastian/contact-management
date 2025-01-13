// @dec Register a user
// @route POST /api/users/register
// @access public
const registerUser = asyncHandler(async (req, res) => {
  res.json({
    message: "Register the user",
  });
});

// @dec User login
// @route POST /api/users/login
// @access public
const userLogin = asyncHandler(async, (req, res) => {
  res.json({
    message: "login user",
  });
});

// @dec Current user ifo
// @route GET /api/users/current
// @access public
const currentUserInformation = asyncHandler(async, (req, res) => {
  res.json({
    message: "current user information",
  });
});

module.exports = { registerUser, userLogin, currentUserInformation };
