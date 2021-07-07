const inputPassword = document.querySelector('.content>input')
const togglePassword = document.getElementById('toggleButton')


togglePassword.addEventListener('click', () => {
  
    if (inputPassword.type == 'text') {
        inputPassword.type = 'password'
    }
    else if (inputPassword.type == 'password') {
        inputPassword.type = 'text'
    }

})


