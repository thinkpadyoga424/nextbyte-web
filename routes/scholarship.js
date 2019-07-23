var express = require("express");
var router = express.Router();

/* GET scholarship page. */
router.get("/", function(req, res, next) {
  res.render("scholarship", { title: "Scholarship Programs" });
});

module.exports = router;
