var express = require("express");
var router = express.Router();

/* GET contact page. */
router.get("/", function(req, res, next) {
  res.render("register-scholarship", { title: "Register Scholarship" });
});

module.exports = router;
