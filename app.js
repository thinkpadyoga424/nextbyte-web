const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const sm = require("sitemap");
const mcache = require("memory-cache");
// const redirectHttps = require("express-http-to-https").redirectToHTTPS;

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const aboutRouter = require("./routes/about");
const contactRouter = require("./routes/contact");
const contactFaq = require("./routes/faq");
const websiteRouter = require("./routes/website");
const mobileRouter = require("./routes/mobile");
const frontendRouter = require("./routes/frontend");
const backendRouter = require("./routes/backend");
const termRouter = require("./routes/term");
const policyRouter = require("./routes/policy");
const registerRouter = require("./routes/register");
const partnerRouter = require("./routes/partner");
const scholarshipRouter = require("./routes/scholarship");
const scholarshipRegisterRouter = require("./routes/register-scholarship");
const graduateRouter = require('./routes/graduate')
const eventRouter = require("./routes/event")

const app = express();

app.use(cors());

// app.use(redirectHttps([/localhost:(\d{4})/], [/\/error/], 301));
// app.use(function requireHTTPS(req, res, next) {
//  // The 'x-forwarded-proto' check is for Heroku
//   if (
//     !req.secure &&
//     req.get("x-forwarded-proto") !== "https" &&
//     process.env.NODE_ENV !== "development"
//   ) {
//     return res.redirect("https://" + req.get("host") + req.url);
//   }
//   next();
// });

// Robot.txt
app.use("/robots.txt", function(req, res, next) {
  res.type("text/plain");
  res.send(
    "User-agent: *\nDisallow: /users\nDisallow: /team\n\n\nSitemap: https://nextbyte-website-240706.appspot.com/sitemap.xml"
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

const cache = duration => {
  return (req, res, next) => {
    let key = "__express__" + req.originalUrl || req.url;
    let cachedBody = mcache.get(key);
    if (cachedBody) {
      res.send(cachedBody);
      return;
    } else {
      res.sendResponse = res.send;
      res.send = body => {
        mcache.put(key, body, duration * 1000);
        res.sendResponse(body);
      };
      next();
    }
  };
};

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/about", aboutRouter);
app.use("/contact", contactRouter);
app.use("/faq", contactFaq);
app.use("/website", websiteRouter);
app.use("/mobile", mobileRouter);
app.use("/frontend", frontendRouter);
app.use("/backend", backendRouter);
app.use("/term-and-conditions", termRouter);
app.use("/privacy-policy", policyRouter);
app.use("/partnership", partnerRouter);
app.use("/register", cache(60), registerRouter);
app.use("/scholarship", scholarshipRouter);
app.use("/scholarship-register", scholarshipRegisterRouter);
app.use("/graduates", graduateRouter);
app.use("/event", eventRouter);

const sitemap = sm.createSitemap({
  hostname: "https://nextbyte.co",
  cacheTime: 600000,
  urls: [
    { url: "/", priority: 1.0, lastmodISO: "2019-05-22T13:53:13+00:00" },
    { url: "/about", priority: 0.8, lastmodISO: "2019-05-22T13:53:13+00:00" },
    { url: "/website", priority: 0.8, lastmodISO: "2019-05-22T13:53:13+00:00" },
    { url: "/mobile", priority: 0.8, lastmodISO: "2019-05-22T13:53:13+00:00" },
    { url: "/frontend", priority: 0.8, lastmodISO: "2019-05-24T13:53:13+00:00" },
    { url: "/backend", priority: 0.8, lastmodISO: "2019-05-24T13:53:13+00:00" },
    { url: "/contact", priority: 0.8, lastmodISO: "2019-05-22T13:53:13+00:00" },
    {
      url: "/privacy-policy",
      priority: 0.8,
      lastmodISO: "2019-05-22T13:53:13+00:00"
    },
    { url: "/faq", priority: 0.8, lastmodISO: "2019-05-22T13:53:13+00:00" },
    {
      url: "/term-and-conditions",
      priority: 0.8,
      lastmodISO: "2019-05-22T13:53:13+00:00"
    },
    {
      url: "/register",
      priority: 0.64,
      lastmodISO: "2019-05-22T13:53:13+00:00"
    }
  ]
});

app.get("/sitemap.xml", function(req, res) {
  sitemap.toXML(function(err, xml) {
    if (err) {
      return res.status(500).end();
    }
    res.header("Content-Type", "application/xml");
    res.send(xml);
  });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
  // res.status(404).render("error", { url: req.url });
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
