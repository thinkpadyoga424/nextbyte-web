var express = require("express");
var router = express.Router();

/* GET Term and Condition page. */
router.get("/", function(req, res, next) {
  res.render("term", { title: "Term and Condition" });
});

module.exports = router;
