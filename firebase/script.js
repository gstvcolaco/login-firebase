const form = {
    user: () => document.getElementById("user"),
    senha: () => document.getElementById("senha")
}

const btLogin = document.getElementById("botaologin")

btLogin.addEventListener("click", function () {
    firebase.auth().signInWithEmailAndPassword(
        form.user().value, form.senha().value).then(response => {
        window.location.href = "home.html";
    }).catch(error => {
        console.log('error')
        alert(getErrorMessage(error));
    });
})
function cadastro(){
    window.location.href="cadastro.html"
}

// Funçao de cadastrar no firebase
btCadastro = document.getElementById("botaocadastro")
btCadastro.addEventListener("click", function(){
    const usuario = form.user().value;
const password = form.senha().value;

firebase.auth().createUserWithEmailAndPassword(
    usuario, password
).then(() => {
   
    window.location.href = "main.html";
}).catch(error => {
    
    alert(getErrorMessage(error));
})
})
function getErrorMessage(error) {
    if (error.code == "auth/email-already-in-use") {
        return "Email já está em uso";
    }
    return error.message;
}
function logingg(){
    window.location.href="index.html"
}