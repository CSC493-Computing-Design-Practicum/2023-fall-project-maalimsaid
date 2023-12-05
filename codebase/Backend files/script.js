const form = document.querySelector('form')
const fullname = document.getElementById('fullname')
const email = document.getElementById('email')
const message = document.getElementById('message')


function sendEmail(){

  const bodyMessage = 'Full Name: ${fullname.value}<br> Email : $ {email.value} <br> Message: ${message.value}';
  
  Email.send({
        Host : "smtp.elasticemail.com",
        Username : "saidbashir1774@gmail.com",
        Password : "8CF59A4522C0352AC151DDCD0AEAC7C0C687",
        To : 'saidbashir1774@gmail.com',
        From : "saidbashir1774@gmail.com",
        Subject : "Contact Form",
        Body : "Said Maalim <br> maalims@berea.edu<br>Hi"
    }).then(
      message => {
        if (message == "OK") {
          Swal.fire({
            title: "Success!",
            text: "Message sent Succesfully!",
            icon: "success"
          });
      }
      }
    );

}
form.addEventListener("submit", (e) => {

e.preventDefault();
  
sendEmail();
  
} )