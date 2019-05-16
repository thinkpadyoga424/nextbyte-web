/*==================================================================================
    Custom JS (Any custom js code you want to apply should be defined here).
====================================================================================*/
var page = window.location.pathname;
if (page == "/about") {
  $(".aboutCss").addClass("active");
} else if (page == "/") {
  $(".homeCss").addClass("active");
} else if (page == "/mobile" || page == "/website") {
  $(".programsCss").addClass("active");
} else if (page == "/faq") {
  $(".faqCss").addClass("active");
} else if (page == "/contact") {
  $(".contactCss").addClass("active");
}
