const debug = require("debug")("blogmos:development");
const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    debug("TOKEN NOT FOUND");
    res.clearCookie("token");
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    debug("TOKEN VERIFIED");
    next();
  } catch (error) {
    res.status(401).json({ message: "Token is not valid" });
  }
};
