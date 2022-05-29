const form = document.querySelector('form')
const email = document.querySelector('input[type="email"]')
const password = document.querySelector('input[type="password"]')
const errMail = document.querySelector('.errMail')
const errPass = document.querySelector('.errPass')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    let emailValue = email.value
    let passwordValue = password.value
    // email
    if(emailValue === ""){
        email.style.border= '2px solid #D22947'
    }
    else if(!regExMail(emailValue)) {
        email.style.border= '2px solid #D22947'
        errMail.textContent = 'Please enter a valid address mail';
    }else{
        email.style.border= ''
    }
    // pass
    if (passwordValue === "") {
        password.style.border= '2px solid #D22947'
    }else{
        password.style.border= ''
    }

    const data = new FormData()

    data.append('email', emailValue)
    data.append('password', passwordValue)

    let config = {
        method: "POST",
        body: data
    }

    fetch('script.php', config)
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        console.log(data)
    })




})

function regExMail(email) {
    let isValid = 0;
    const regEx =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    email.match(regEx) ? (isValid = 1) : (isValid = 0);
    return isValid;
}