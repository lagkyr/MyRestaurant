

const scriptURL = 'https://script.google.com/macros/s/AKfycbwWghlPpSqpnRJ_WBCouYF2z32BIKjME7hIdJ69Si-fBT4OssoKfENapb5kDd5quPCXMQ/exec'

const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      msg.innerHTML = "Message Was Sent Successfully"
      setTimeout(function(){
        msg.innerHTML = ''
      }, 5000)
    form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})




