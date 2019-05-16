var express = require("express");
var router = express.Router();
const axios = require("axios");

let data = ``;

/* GET about page. */
router.get("/", function(req, res, next) {
  let data = [];
  axios
    .get("https://us-central1-dbnextbyte.cloudfunctions.net/api/v1/team")
    .then(response => {
      data.push(response.data.data);
      console.log(data[0][1].index);
      data[0].sort(function(a, b) {
        return a.index - b.index;
      });
      console.log(data);
      res.render("about", { data: data });
    })
    .catch(error => {
      res.render("error", { error: error });
    });
});

module.exports = router;
