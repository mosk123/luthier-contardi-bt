/* DECLARAMOS LOS PRODUCTOS */

const guitarras =[{id: 1, modelo: "Zbt", img: "./img/Rgtr01.JPG", precio: 220000},
                  {id: 2, modelo: "Gbr", img: "./img/Rgtr02.JPG", precio: 90000},
                  {id: 3, modelo: "Amb", img: "./img/gtr1b.JPG", precio: 120000},
                  {id: 4, modelo: "Cer", img: "./img/gtr2.jpg", precio: 115000},
                  {id: 5, modelo: "Pot", img: "./img/gtr4.jpg", precio: 230000},
                  {id: 6, modelo: "Htr", img: "./img/gtr3.jpg", precio: 85000},
                  {id: 7, modelo: "Rew", img: "./img/gtr5.jpg", precio: 75000},
                  {id: 8, modelo: "Ctr", img: "./img/gtr6.jpg", precio: 95000},
                  
                ];
                


const container = document.getElementById('container');
const btnCarrito = document.getElementById("btnCarrito");
const contenedorProductos = document.getElementsByName("contenedorProductos");


if (!localStorage.getItem('guitarras')) localStorage.setItem('guitarras', JSON.stringify(guitarras));

const renderizarTienda = (objetoGuitarras) => {

  contenedorProductos.innerHTML = '';

for (const guitarra of objetoGuitarras){ 
    
const divProducto = document.createElement("div");
const svgProducto = document.createElement("img");
const divTitulo = document.createElement("div");
const nombreProducto = document.createElement("h5");
const precioProducto = document.createElement("p");
const botonComprar = document.createElement("button");

divProducto.className = "card";
svgProducto.className = "card-img-top";
svgProducto.styleName = "background-image: url(`${guitarra.img}`)";
divTitulo.className = "card-body text-center";
nombreProducto.className = "card-title";
precioProducto.className = "card-text";
botonComprar.className = "btn btn-outline-dark button";

svgProducto.src = guitarra.img;
nombreProducto.append(guitarra.modelo);
precioProducto.append(`$ ${guitarra.precio}`);
botonComprar.append('Comprar');
botonComprar.id = guitarra.id;


divProducto.append(svgProducto, divTitulo, nombreProducto, precioProducto, botonComprar);

container.append(divProducto);

}
}
renderizarTienda(JSON.parse(localStorage.getItem('guitarras')))

/* Boton Carrito */

const clickBtn = document.querySelectorAll(".button");
const tbody = document.querySelector('.tbody');
let carrito = []

clickBtn.forEach(btn =>{
  btn.addEventListener("click", (agregarAlCarrito))
})


function agregarAlCarrito(e){
  const button = e.target
  const item = button.closest(".card");
  const itemTitle = item.querySelector(".card-title").textContent;
  const itemPrecio = item.querySelector(".card-text").textContent;

  const nuevoItem = {
    title: itemTitle,
    precio: itemPrecio,
    cantidad: 1,

  }
  agregarItemCarrito(nuevoItem)
}

function agregarItemCarrito(nuevoItem){

carrito.push(nuevoItem)

renderCarrito();
}

function renderCarrito(){

tbody.innerHTML = "";
carrito.map(item => {
   const tr = document.createElement("tr")
   tr.classList.add("itemCarrito")

   const Content = `
   <tr>
   <th scope="row">1</th>
   <td class="table__productos">
   <h6 class="title">${item.title}</h6>
   </td>
   <td class="table__price"><p>${item.precio}</p></td>
   <td class="table__cantidad">
   <input type="number" min="1" value=${item.cantidad} class="input__elemento">
   <button class="delete btn btn-danger">x</button>
   /td>
 </tr>
   `

  tr.innerHTML = Content;
  tbody.append(tr)
})
}





