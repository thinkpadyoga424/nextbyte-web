var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
const sm = require('sitemap')

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var aboutRouter = require("./routes/about");
var contactRouter = require("./routes/contact");
var contactFaq = require("./routes/faq");
var websiteRouter = require("./routes/website");
var mobileRouter = require("./routes/mobile");
var termRouter = require("./routes/term");
var policyRouter = require("./routes/policy");
var registerRouter = require("./routes/register");

var app = express();

app.use(cors());

// Robot.txt
app.use("/robots.txt", function(req, res, next) {
  res.type("text/plain");
  res.send(
    "User-agent: *\nDisallow: /users\nDisallow: /team\n\n\nSitemap: https://nextbyte.co/sitemap.xml"
  );
});

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/about", aboutRouter);
app.use("/contact", contactRouter);
app.use("/faq", contactFaq);
app.use("/website", websiteRouter);
app.use("/mobile", mobileRouter);
app.use("/term-and-conditions", termRouter);
app.use("/privacy-policy", policyRouter);
app.use("/register", registerRouter);

const sitemap = sm.createSitemap({
  hostname: 'https://nextbyte.co',
  cacheTime: 600000,
  urls: [
    { url: '/', priority: 1.00, lastmodrealtime: true },
    { url: '/about', priority: 0.80, lastmodrealtime: true },
    { url: '/website', priority: 0.80, lastmodrealtime: true },
    { url: '/mobile', priority: 0.80, lastmodrealtime: true },
    { url: '/contact', priority: 0.80, lastmodrealtime: true },
    { url: '/privacy-policy', priority: 0.80, lastmodrealtime: true },
    { url: '/faq', priority: 0.80, lastmodrealtime: true },
    { url: '/term-and-conditions', priority: 0.80, lastmodrealtime: true },
    { url: '/register', priority: 0.64, lastmodrealtime: true }
  ]
})

app.get('/sitemap.xml', function(req, res) {
  sitemap.toXML( function (err, xml) {
      if (err) {
        return res.status(500).end();
      }
      res.header('Content-Type', 'application/xml');
      res.send( xml );
  });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
