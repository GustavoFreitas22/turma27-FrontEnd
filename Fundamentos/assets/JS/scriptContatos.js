let nome = window.document.getElementById('nome')/*É possivel acessar por Tag/ className/ QuerySelector/ Name*/
let email = document.querySelector('input#email')
let assunto = document.querySelector('#assunto')
let mapa = document.querySelector('#mapa')

let nomeOk = false
let emailOk = false
let assuntoOk = false

nome.style.width = "100%"
email.style.width = "100%"

function validaNome(){
    let txtNome = document.querySelector('#txtName')

    if(nome.value.length < 3){
        txtNome.style.color = "red"
        txtNome.innerHTML = "Nome Inválido"
        nomeOk = false
    }else{
        txtNome.style.display = "none"
        nomeOk = true
    }

}

function validaEmail(){
    txtEmail = document.querySelector("#txtEmail")

    if(email.value.indexOf('@')<1 || email.value.indexOf('.')<1){
        txtEmail.style.color = "red"
        txtEmail.innerHTML = "Email invalido"
        emailOk = false
    }else{
        txtEmail.style.display = "none"
        emailOk = true
    }
}

function validaAssunto(){
    let txtAssunto = document.querySelector("#txtAssunto")

    if(assunto.value.length >= 100){
        txtAssunto.style.color = "red"
        txtAssunto.style.display = 'block'
        txtAssunto.innerHTML = "Limite ultrapassado digite até 100 caracteres"
        assuntoOk = false
    }else{
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }
}

function enviar (){
    if(nomeOk == true && emailOk == true && assuntoOk == true){
        window.alert("Enviado com sucesso!")
    }else{
        window.alert("Falha ao enviar.")
    }
}

function mapaZoom(){
    mapa.style.width = "600px"
    mapa.style.height = "450px"
}
function mapaNormal(){
    mapa.style.width = "450px"
    mapa.style.height = "300px"

}
