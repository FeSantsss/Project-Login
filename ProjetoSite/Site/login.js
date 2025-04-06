var emaillogin = document.getElementById('inputemail')
var senhalogin = document.getElementById('inputsenha')
var botãologin = document.getElementById('loginbotão') 
var errologin = document.getElementById('erroemail')
var errosenha = document.getElementById('errosenha')
var lembrar = document.getElementById('lembrarradio')

botãologin.addEventListener('click', confirmar)

function confirmar() {
    if (emaillogin.value !== 'tercetime18@gmail.com'){
        errologin.innerText = 'E-mail errado, tente novamente';
    }else if (emaillogin.value == 'tercetime18@gmail.com'){
        errologin.innerText = 'Email correto!';
    }else{
        erroemail.innerText = 'adicione um E-mail válido';
    }

    if(senhalogin.value == 'tercetime01'){
        errosenha.innerText = 'senha correta!'
    }else if(senhalogin.value !== 'tercetime01'){
        errosenha.innerText = 'senha errada, tente novamente!'
    }else {
        errosenha.innerText = 'adicione uma senha válida'
    }
} 