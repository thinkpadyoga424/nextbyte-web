var express = require("express");
var router = express.Router();

/* GET partner page. */
router.get("/", function(req, res, next) {
  res.render("partner", { title: "Hiring Partner" });
});

module.exports = router;
