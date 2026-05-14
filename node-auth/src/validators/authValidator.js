const { body, validationResult } = require("express-validator");

const validateSignup = [
  body("name").notEmpty().withMessage("Name is required"),
  body("email").notEmpty().withMessage("Valid email is required"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("  Password must be at least 6 characters"),
];

const validateLogin = [
  body("email").notEmpty().withMessage("Valid email is required"),
  body("password").isLength({ min: 6 }).withMessage("password is required"),
];

const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    var err;
    return res.status(400).json({
      errors: errors.array().map((err) => err.msg),
    });
  }
  next();
};

module.exports = {
  validateSignup,
  validateLogin,
  handleValidationErrors,
};
