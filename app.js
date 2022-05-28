const form = document.querySelector('form')
const email = document.querySelector('input[type="email"]')
const password = document.querySelector('input[type="password"]')
const errMail = document.querySelector('.errMail')
const errPass = document.querySelector('.errPass')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    let emailValue = email.value
    let passwordValue = password.value
    console.log(errMail)

    if(emailValue === ""){
        email.style.border= '2px solid #D22947'
    }
    else if (!regExMail(emailValue)) {
        email.style.border= '2px solid #D22947'
        errMail.textContent = 'Please enter a valid address mail';
    }

    if (passwordValue === "") {

    }else if (passwordValue < 8) {
        errPass.textContent = "Please enter a valid password"
    }



})

function regExMail(email) {
    let isValid = 0;
    const regEx =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    email.match(regEx) ? (isValid = 1) : (isValid = 0);
    return isValid;
}