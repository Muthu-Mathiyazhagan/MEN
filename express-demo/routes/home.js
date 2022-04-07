const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log("Home Router Module");
  res.send("Hello Wordl");
});

module.exports = router;
