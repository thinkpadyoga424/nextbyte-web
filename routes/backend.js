var express = require("express");
var router = express.Router();

/* GET mobile page. */
router.get("/", function(req, res, next) {
  res.render("backend", { title: "Backend Development Program" });
});

module.exports = router;
