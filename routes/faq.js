const express = require("express");
const router = express.Router();
const axios = require("axios");

/* GET about page. */
router.get("/", function(req, res, next) {
  let data = [];

  axios
    .get("https://us-central1-dbnextbyte.cloudfunctions.net/api/v1/faqs")
    .then(response => {
      data.push(response.data.data);
      console.log(data[0].length);
      res.render("faq", { data: data });
    })
    .catch(error => {
      res.render("error", { error: error });
    });
});

module.exports = router;
