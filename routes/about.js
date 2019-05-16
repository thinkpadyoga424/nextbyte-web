var express = require("express");
var router = express.Router();

let data = ``;

/* GET about page. */
router.get("/", function(req, res, next) {
  res.render("about", { content: data });
});

module.exports = router;
