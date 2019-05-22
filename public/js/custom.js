/*==================================================================================
    Custom JS (Any custom js code you want to apply should be defined here).
====================================================================================*/

// ============ Function Get Class in Pathname ============ >
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

// ============ Function Newsletter ============ >

const formEmail = document.getElementById("footer-form-email");

function newsLetter(event) {
  event.preventDefault();

  const email = document.getElementById("footer-email").value;

  const data = {
    email: email
  };

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
      console.log(data);
      Swal.fire({
        type: "success",
        title: "Terima Kasih Telah Subscribe",
        text: email,
        showConfirmButton: true
      });
      document.getElementById("footer-email").value = "";
    })
    .catch(err1 => {
      console.log(err1);
    });
}

formEmail.addEventListener("submit", newsLetter);

// ============ Contact Us Newsletter ============ >

const formContact = document.getElementById("contact-form");

function contactUs(event) {
  event.preventDefault();

  const subject = document.getElementById("contact-subject").value;
  const email = document.getElementById("contact-email").value;
  const fullName = document.getElementById("contact-fullName").value;
  const message = document.getElementById("contact-message").value;

  const data = {
    email: email,
    full_name: fullName,
    subject: subject,
    message: message
  };

  const url =
    "https://us-central1-dbnextbyte.cloudfunctions.net/api/v1/contact_us";

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
      console.log(data);
      Swal.fire({
        type: "success",
        title: email,
        text: "Terima Kasih Telah Menghungi Kami",
        showConfirmButton: true
      });
      document.getElementById("footer-email").value = "";
      document.getElementById("footer-subject").value = "";
      document.getElementById("footer-fullName").value = "";
      document.getElementById("footer-message").value = "";
    })
    .catch(err1 => {
      console.log(err1);
    });
}

formContact.addEventListener("submit", contactUs);

// ============ Section Newsletter ============ >

const formNewsletter = document.getElementById("form-newsletter");
console.log(formNewsletter);

function newsletterSection(event) {
  event.preventDefault();
  console.log("OKE");

  // const email = document.getElementById("newsletter-email").value;

  // const data = {
  //   email: email
  // };

  // const url =
  //   "https://us-central1-dbnextbyte.cloudfunctions.net/api/v1/newsletter";

  // const request = {
  //   method: "POST", // *GET, POST, PUT, DELETE, etc.
  //   mode: "cors", // no-cors, cors, *same-origin
  //   cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
  //   credentials: "same-origin", // include, *same-origin, omit
  //   headers: {
  //     "Content-Type": "application/json"
  //     // 'Content-Type': 'application/x-www-form-urlencoded',
  //   },
  //   redirect: "follow", // manual, *follow, error
  //   referrer: "no-referrer", // no-referrer, *client
  //   body: JSON.stringify(data) // body data type must match "Content-Type" header
  // };

  // fetch(url, request)
  //   .then(response => {
  //     return response;
  //   })
  //   .then(data => {
  //     console.log(data);
  //     Swal.fire({
  //       type: "success",
  //       title: "Terima Kasih Telah Subscribe",
  //       text: email,
  //       showConfirmButton: true
  //     });
  //     document.getElementById("newsletter-email").value = "";
  //   })
  //   .catch(err1 => {
  //     console.log(err1);
  //   });
}

formNewsletter.addEventListener("submit", newsletterSection);
