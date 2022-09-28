// required packages
const router = require("express").Router();
const db = require("../models/index");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// ROUTES

// POST /user/register --- Register a new user
router.post("/register", async (req, res) => {
  try {
    /// The DB is checked for a duplicate account.
    const findAccount = await db.Account.findOne({
      email: req.body.email,
    });

    // An account cannot be created twice.
    if (findAccount) {
      return res.status(400).json({ msg: "email exists already" });
    }
    // The account's password is hashed.
    const password = req.body.password;
    const saltRounds = 12;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // A new account is created with the hashed password.
    const newAccount = new db.Account({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });
    await newAccount.save();
    // The account is signed in.
    // The jwt payload is created.
    const payload = {
      name: newAccount.name,
      email: newAccount.email,
      id: newAccount.id,
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
    res.status(500).json(err);
  }
});
