

/* document.addEventListener('DOMContentLoaded', () =>{
    pedirUsuario()
})

const pedirUsuario = async () => {
    const res = await fetch('https://randomuser.me/api/')
    const data = await res.json()
    console.log(data);
    } */

    
let usuarios = document.querySelector("#contenido")

function obtener (){
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data =>{
        console.log(data.results['0'].name)
        usuarios.innerHTML = `
        <img src="${data.results['0'].picture.large}" width="100px" class="img-fluid rounded-circle">
        <h2 class="text-ligth">Nombre: ${data.results['0'].name.first}</h2>
        `
    })
} 