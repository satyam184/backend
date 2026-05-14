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
  validateSignup,
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

module.exports = router;
