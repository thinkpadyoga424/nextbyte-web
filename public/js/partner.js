// ============ Contact Us ============ >

const partnerContact = document.getElementById("partner-form");
partnerContact.addEventListener("submit", hiringPartner);

function hiringPartner(event) {
  event.preventDefault();

  let partnerName = document.getElementById("partner-name").value
  let partnerEmail = document.getElementById("partner-email").value
  let partnerPhone = document.getElementById("partner-phone").value
  let companyName = document.getElementById("partner-company-name").value
  let partnerWeb = document.getElementById("partner-web").value
  let partnerMessage = document.getElementById("partner-message").value

  const data = {
    name: partnerName,
    email: partnerEmail,
    phone: partnerPhone,
    company: companyName,
    web: partnerWeb,
    message: partnerMessage
  };

  const url =
    "https://us-central1-dbnextbyte.cloudfunctions.net/api/v1/partnership";

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
        title: "Perminttan Anda Terkirim",
        text: "Terima Kasih Telah Tertarik untuk Bekerjasama dengan Kami",
        showConfirmButton: true
      });

     if(data.status === 200) {
      
      setTimeout(() => {
         window.location.replace('http://nextbyte.co')
      }, 3000)

     }

   })
   .catch(err1 => {
      console.log(err1);
   });
    
}
