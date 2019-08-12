const formID = document.getElementById('form-id')
const inputID = document.getElementById('input-id')
const detailProfile = document.getElementById('detail-profile')

formID.addEventListener('submit', e => {
   e.preventDefault()

   const certifiedId = inputID.value

   if (certifiedId === "") {
      Swal.fire({
         type: 'error',
         title: 'Oops...',
         text: 'Mohon Isi form terlebih dahulu..'
       })
   } else {
      fetch(`https://us-central1-dbnextbyte.cloudfunctions.net/api/v1/student/${certifiedId}`)
      .then(response => {
         if (response.status === 500) {
            Swal.fire({
               type: 'error',
               title: 'Oops...',
               text: 'ID yang anda masukan salah..'
            })
         }

         console.log(response.status)

         return response.json()
      })
      .then(res => {

         console.log(res.data)

         if (res.data.id === undefined) {
            detailProfile.innerHTML = ""
         } else {
         
            let result = `
               <div class="col-xs-12 col-sm-3 center">
                  <span class="profile-picture">
                     <img class="editable img-responsive" alt=" Avatar" id="avatar2" src="${res.data.avatar}">
                  </span>
      
               </div>
      
               <div class="col-xs-12 col-sm-9">
                  <h4 class="blue">
                     <span class="middle">${res.data.firstname} ${res.data.lastname}</span>
                  </h4>
      
                  <span class="label label-purple arrowed-in-right">
                     ${res.data.nextbyte_class_major} - batch ${res.data.nextbyte_batch}
                  </span>
      
                  <div class="profile-user-info mt-20">
                     <div class="profile-info-row">
                        <div class="profile-info-name"> ID </div>
      
                        <div class="profile-info-value">
                           <span>${res.data.id}</span>
                        </div>
                     </div>
      
                     <div class="profile-info-row">
                        <div class="profile-info-name"> Tanggal Lahir </div>
      
                        <div class="profile-info-value">
                           <span>${res.data.bod}</span>
                        </div>
                     </div>
      
                     <div class="profile-info-row">
                        <div class="profile-info-name"> Nomor Telfon </div>
      
                        <div class="profile-info-value">
                           <span>${res.data.phone}</span>
                        </div>
                     </div>
      
                     <div class="profile-info-row">
                        <div class="profile-info-name"> Email </div>
      
                        <div class="profile-info-value">
                           <span>${res.data.email}</span>
                        </div>
                     </div>
      
                     <div class="profile-info-row">
                        <div class="profile-info-name"> Sekolah </div>
      
                        <div class="profile-info-value">
                           <span>${res.data.school}</span>
                        </div>
                     </div>
      
                     <div class="profile-info-row">
                        <div class="profile-info-name"> Perguruan Tinggi </div>
      
                        <div class="profile-info-value">
                           <span>${res.data.university}</span>
                        </div>
                     </div>
      
                     <div class="profile-info-row">
                        <div class="profile-info-name"> Final Project </div>
      
                        <div class="profile-info-value">
                           <span>${res.data.final_project}</span>
                        </div>
                     </div>
                  </div>
      
                  <div class="hr hr-8 dotted"></div>
      
                  <div class="profile-user-info">
                     <div class="profile-info-row">
                        <div class="profile-info-name"> Nilai Project </div>
      
                        <div class="profile-info-value">
                           <span>${res.data.score}</span>
                        </div>
                     </div>
      
                     <div class="profile-info-row">
                        <div class="profile-info-name"> Lulus </div>
      
                        <div class="profile-info-value">
                           <span>${res.data.is_graduate  === true ? 'YA' : null}</span>
                        </div>
                     </div>
      
      
                  </div>
               </div>
            `
      
            detailProfile.innerHTML = result

         }
      })
   }
})

