
const usuarioValido = "persona@persona.cl";
const passwordValido = "123456";

const inputUsuario = document.getElementById("correo");
const inputPassword = document.getElementById("password");

function validar() {
    if (inputUsuario.value === usuarioValido && inputPassword.value === passwordValido) {
        alert("usuario y contraseña valido")
    } else {
        alert("usuario o contraseña invalido")
    }
}



