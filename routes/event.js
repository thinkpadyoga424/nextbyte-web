var express = require("express");
var router = express.Router();

/* GET partner page. */
router.get("/", function(req, res, next) {
  res.render("event", { title: "TOP Career Event Promotion" });
});

module.exports = router;
