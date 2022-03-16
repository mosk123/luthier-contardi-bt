
/* AGREGO EVENTO AL FORMULARIO*/

let formulario = document.getElementById("formulario");

const validarFormulario = (e) => {
    /* e.preventDefault(); */ /* Aca, le saco el prevent, para que cuando aceptes el alert, borre los datos. */
    alert("Formulario enviado");
}

formulario.addEventListener("submit", validarFormulario);  