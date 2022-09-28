// required packages
require("./models");
const express = require("express");
const cors = require("cors");

// App configuration and MiddleWares
const app = express();
const PORT = process.env.PORT || 8000;
app.use(cors());
app.use(express.json()); // for json req.bodies

// Routes and Controllers

app.get("/", (req, res) => {
  res.json({ msg: "Backend Home" });
});

app.use("/user", require("./controllers/user"));

// Listening on port

app.listen(PORT, () => {
  console.log(`Server successfully listening on Port ${PORT}`);
});
