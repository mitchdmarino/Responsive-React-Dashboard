// required packages
const router = require("express").Router();
const db = require("../models/index");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userValidation = require("./userValidation");
// ROUTES

// POST /user/register --- Register a new user
router.post("/register", async (req, res) => {
  try {
    /// The DB is checked for a duplicate user.
    const findUser = await db.User.findOne({
      email: req.body.email,
    });
    console.log(findUser);
    // A user cannot be created twice.
    if (findUser) {
      return res.status(400).json({ msg: "email exists already" });
    }
    // The user's password is hashed.
    const password = req.body.password;
    const saltRounds = 12;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // A new user is created with the hashed password.
    const newUser = new db.User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });
    await newUser.save();
    // The user is signed in.
    // The jwt payload is created.
    const payload = {
      name: newUser.name,
      email: newUser.email,
      id: newUser.id,
    };
    // The token is signed and sent back.
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    res.json({ token });
  } catch (err) {
    console.warn(err);
    // This handles validation errors.
    if (err.name === "ValidationError") {
      res.status(400).json({ msg: err.message });
    } else {
      // This handles all other errors.
      res.status(500).json({ msg: "server error 500" });
    }
  }
});

// POST /users/login -- Validate the login credentials.
router.post("/login", async (req, res) => {
  try {
    // The user is searched for in the DB.
    const findUser = await db.User.findOne({
      email: req.body.email,
    });

    // If the user is not found, a status of 400 is sent.
    // The user is sent an error message.
    if (!findUser) {
      return res.status(400).json({ msg: "Invalid Login Credentials" });
    }

    // The supplied password is checked to see if it matched the password in the DB.
    const passwordCheck = await bcrypt.compare(
      req.body.password,
      findUser.password
    );
    // If they don't match, return and let the user know that login has failed.
    if (!passwordCheck) {
      return res.status(400).json({ msg: "Invalid Login Credentials" });
    }
    // A jwt payload is created.
    const payload = {
      name: findUser.name,
      email: findUser.email,
      id: findUser.id,
    };
    // The jwt is signed and sent back.
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    res.json({ token });
  } catch (err) {
    console.warn(err);
    // This handles validation errors.
    if (err.name === "ValidationError") {
      res.status(400).json({ msg: err.message });
    } else {
      // This handles all other errors.
      res.status(500).json({ msg: "server error 500" });
    }
    res.status(500).json(err);
  }
});

module.exports = router;

// Update Account Balance

router.put("/balance", userValidation, async (req, res) => {
  try {
    // access the logged in user from the userValidation middleware
    const user = res.locals.user;
    user.balance = req.body.balance;
    await user.save();
    res.json(user);
  } catch (error) {
    res.status(500).json({ msg: "server error 500" });
  }
});
