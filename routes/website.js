var express = require("express");
var router = express.Router();

/* GET website page. */
router.get("/", function(req, res, next) {
  res.render("website", { title: "Website Development Programs" });
});

module.exports = router;
