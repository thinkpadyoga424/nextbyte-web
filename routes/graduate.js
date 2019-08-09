var express = require("express");
var router = express.Router();

/* GET Graduate page. */
router.get("/", function(req, res, next) {
  res.render("graduate", { title: "Lulusan Kami" });
});

module.exports = router;
