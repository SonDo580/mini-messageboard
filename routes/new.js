const express = require("express");
const router = express.Router();

router.get("/", function (req, res, next) {
  res.render("form", { title: "Message Form" });
});

router.post("/", function (req, res, next) {
  const { author, message } = req.body;
});

module.exports = router;
