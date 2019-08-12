const express = require("express");
const router = express.Router();

const Axios = require('axios')

/* GET Graduate page. */
router.get("/", function(req, res, next) {

  res.render("graduate", { title: "Lulusan Kami" });
});

module.exports = router;
