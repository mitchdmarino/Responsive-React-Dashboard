const jwt = require("jsonwebtoken");
const db = require("../models");

const userValidation = async (req, res, next) => {
  try {
    // The jwt from the client is sent in the headers
    const authHeader = req.headers.authorization;
    // The jwt is decoded.
    // A catch will be thrown if the signature is invalid.
    const decode = jwt.verify(authHeader, process.env.JWT_SECRET);
    // The user in the db that sent the jwt is found.
    const foundUser = await db.User.findById(decode.id);
    // The user is mounted on the res.locals, so the downstream route can access the logged in user's data.
    res.locals.user = foundUser;
    next();
  } catch (err) {
    // This means there is a authentication error
    console.warn(err);
    res
      .status(401)
      .json({ msg: "User authentication failed. Log in again to continue" });
  }
};

module.exports = userValidation;
