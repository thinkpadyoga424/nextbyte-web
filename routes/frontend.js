var express = require("express");
var router = express.Router();

/* GET mobile page. */
router.get("/", function(req, res, next) {
  res.render("frontend", { title: "Frontend Development Program" });
});

module.exports = router;
