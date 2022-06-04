const form = document.querySelector('form')
const email = document.querySelector('input[type="email"]')
const password = document.querySelector('input[type="password"]')
const errMail = document.querySelector('.errMail')
const errPass = document.querySelector('.errPass')
const existOrnot = document.querySelector('.exist-not-exist')

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
    }else if(passwordValue.length < 8){
        password.style.border= '2px solid #D22947'
        errPass.textContent = 'Mot de passe trop court';
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
        if(data.failed){
            existOrnot.textContent = 'utilisateur existe deja ! vous aller etre rediriger vers la page de connexion';
            setTimeout(()=>{
                window.location.href = "index.php"
            }, 6000);
            
        }



    })




})

function regExMail(email) {
    let isValid = 0;
    const regEx =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    email.match(regEx) ? (isValid = 1) : (isValid = 0);
    return isValid;
}