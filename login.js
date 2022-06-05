const formLogin = document.querySelector('#login')
const email = document.querySelector('.email-log')
const password = document.querySelector('.password-log')
const errMail = document.querySelector('.errMail')
const errPass = document.querySelector('.errPass')
const existOrnot = document.querySelector('.exist-not-exist')
console.log(formLogin);
formLogin.addEventListener('submit', (e) => {
    e.preventDefault()
    let emailValue = email.value
    let passwordValue = password.value

    const data = new FormData()

    data.append('email-log', emailValue)
    data.append('password-log', passwordValue)
    let config = {
        method: "POST",
        body: data
    }
    fetch('login.php', config)
    .then((res)=>{return res.json()})
    .then((data)=>{
        if(data.success){
            window.location.href = "welcome.html"
            console.log("connecter");
        }else{
            existOrnot.textContent = 'Email ou password incorrect';
        }
        console.log(data);
    })
})