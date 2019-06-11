// ============ Section Newsletter ============ >
const formNewsletter = document.getElementById("section-newsletter-form");

formNewsletter.addEventListener("submit", newsletterSection);

function newsletterSection(event) {
  event.preventDefault();
  console.log("OKE");

  const email = document.getElementById("section-newsletter-email").value;

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
      document.getElementById("newsletter-email").value = "";
    })
    .catch(err1 => {
      console.log(err1);
    });
}
