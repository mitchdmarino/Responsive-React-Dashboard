const mongoose = require("mongoose");

// Database URI
const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://127.0.0.1/roadiesAssignment";

// connect Mongoose to the database
mongoose.connect(MONGODB_URI);
const db = mongoose.connection;

// Success
db.once("open", () => {
  console.log(`connected to MongoDB @ ${db.host}: ${db.port}`);
});

// Database Error handling
db.on("error", (err) => {
  console.error("Database Error:", err);
});

module.exports = {
  User: require("./user"),
};
