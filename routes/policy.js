var express = require("express");
var router = express.Router();

/* GET Privacy Policy page. */
router.get("/", function(req, res, next) {
  res.render("policy", { title: "Privacy Policy" });
});

module.exports = router;
