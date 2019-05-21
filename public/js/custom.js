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

const formEmail = document.getElementById("footer-form-email");

function newsLetter(event) {
  event.preventDefault();

  const email = document.getElementById("footer-email").value;

  const data = {
    email: email
  };

  const headers = new Headers({
    "Content-Type": "application/json"
    // Accept: "application/json"
  });

  const url =
    "https://us-central1-dbnextbyte.cloudfunctions.net/api/v1/newsletter";

  const request = {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, cors, *same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json"
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrer: "no-referrer", // no-referrer, *client
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  };

  fetch(url, request)
    .then(response => {
      return response;
    })
    .then(data => {
      window.alert("Thank you for Subscibe!");
      console.log(data);
    })
    .catch(err1 => {
      console.log(err1);
    });
}

formEmail.addEventListener("submit", newsLetter);

// POST Register to Airtable
