/*==================================================================================
    Custom JS (Any custom js code you want to apply should be defined here).
====================================================================================*/

// Function Get Class in Pathname
var page = window.location.pathname;
if (page == "/about") {
  $(".aboutCss").addClass("active");
} else if (page == "/") {
  $(".homeCss").addClass("active");
} else if (page == "/mobile") {
  $(".programsCss").addClass("active");
  $(".mobileCss").addClass("active");
} else if (page == "/website") {
  $(".programsCss").addClass("active");
  $(".websiteCss").addClass("active");
} else if (page == "/faq") {
  $(".faqCss").addClass("active");
} else if (page == "/contact") {
  $(".contactCss").addClass("active");
}

// Function Newsletter
function newsLetter() {
  window.alert("Thank you for Subscibe!");
}
