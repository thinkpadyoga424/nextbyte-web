// ============ Contact Us ============ >

const formContact = document.getElementById("contact-form");
formContact.addEventListener("submit", contactUs);

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
    })
    .catch(err1 => {
      console.log(err1);
    });
}
