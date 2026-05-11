const jwt = require("jsonwebtoken");

const protect = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      const parts = req.headers.authorization.split(" ");
      console.log(`Parts of token: ${parts}`);
      token = parts[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded.id;
      next();
    } catch (error) {
      return res.status(401).json({
        message: "Not authorized",
      });
    }

    if (!token) {
      return res.status(401).json({
        message: "No token",
      });
    }
  }
};

module.exports = protect;
