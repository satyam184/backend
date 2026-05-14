const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");
const authController = require("../controllers/authController");
const {
  validateSignup,
  validateLogin,
  handleValidationErrors,
} = require("../validators/authValidator");

router.post(
  "/signup",
  validateSignup,
  handleValidationErrors,
  authController.registerUser,
);
router.post(
  "/login",
  validateLogin,
  handleValidationErrors,
  authController.loginUser,
);
router.get(
  "/profile",
  protect,
  authController.getProfile,
  /* #swagger.security = [{
        "bearerAuth": []
  }] */
);

router.post("/refresh-token", authController.refreshAccessToken);

router.post("/logout", authController.logoutUser);

module.exports = router;
