/* DECLARAMOS LOS PRODUCTOS */

const guitarras =[{id: 10, modelo: "Zbt", img: "./img/Rgtr01.JPG", precio: 220000},
                  {id: 10, modelo: "Gbr", img: "./img/Rgtr02.JPG", precio: 90000},
                  {id: 10, modelo: "Loc", img: "./img/Rgtr03.JPG", precio: 225000}];




/* CONSTRUCCION DE LAS TARJETAS DE PRODUCTOS */

for(const guitarra of guitarras){ 
    
let contenedor = document.createElement("div");  

/* Defino con plantillas literales*/ 

contenedor.innerHTML =`<div class="col">
                     <div data-aos="flip-up" data-aos-delay="50" data-aos-duration="4000" class="card shadow-sm" >
                     <svg class="bd-placeholder-img card-img-top" width="100%" height="225" style="background-image: url(${guitarra.img})" ></svg>
                     <div class="card-body text-center">
                     <h5 class="card-title">${guitarra.modelo}</h5>
                     <p class="card-text">$ ${guitarra.precio}</p>
                     <a href="#" class="btn btn-outline-dark">Comprar</a>
                     <div class="d-flex justify-content-between align-items-center">
                     </div>
                     </div>
                     </div>
                     </div>`

/* Llamo al ID posicionado en el HTML, contenedor de las cards */

container.append(contenedor);

}




/* CAMBIA EL COLOR DE LOS PRIMEROS BOTONES MEDIANTE UN PROMPT 

let color = document.getElementById("color");
let color2 = document.getElementById("color2");
let color3 = document.getElementById("color3");
let color4 = document.getElementById("color4");
let color5 = document.getElementById("color5");
let color6 = document.getElementById("color6");
let color7 = document.getElementById("color7");
let color8 = document.getElementById("color8");
let color9 = document.getElementById("color9");

let pregunta = prompt("¿Te gustaria cambiarle el color al boton? Podes elegir ROJO - VERDE o NEGRO");

if (pregunta.toUpperCase() === "ROJO"){
    color.className = "btn btn-outline-danger"
    color2.className = "btn btn-outline-danger"
    color3.className = "btn btn-outline-danger"
    color4.className = "btn btn-outline-danger"
    color5.className = "btn btn-outline-danger"
    color6.className = "btn btn-outline-danger" 
    color7.className = "btn btn-outline-danger"
    color8.className = "btn btn-outline-danger"
    color9.className = "btn btn-outline-danger"
}
else if(pregunta.toUpperCase() === "VERDE"){
    color.className = "btn btn-success"
    color2.className = "btn btn-success"
    color3.className = "btn btn-success"
    color4.className = "btn btn-success"
    color5.className = "btn btn-success"
    color6.className = "btn btn-success" 
    color7.className = "btn btn-success"
    color8.className = "btn btn-success"
    color9.className = "btn btn-success"
}
else{
    color.className = "btn btn-outline-dark";
    color2.className = "btn btn-outline-dark"
    color3.className = "btn btn-outline-dark"
    color4.className = "btn btn-outline-dark"
    color5.className = "btn btn-outline-dark"
    color6.className = "btn btn-outline-dark" 
    color7.className = "btn btn-outline-dark"
    color8.className = "btn btn-outline-dark"
    color9.className = "btn btn-outline-dark"
} */

