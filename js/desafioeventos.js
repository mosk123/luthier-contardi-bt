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
                
const carrito = []

const container = document.getElementById('container');
const contenedorCarrito = document.getElementById('contenedorCarrito');
const btnCarrito = document.getElementById("btnCarrito");
const contenedorProductos = document.getElementsByName("contenedorProductos");
const btnEliminar = document.getElementById('btnEliminarProd');
const selectEliminar = document.getElementById('eliminarProductos');


if (!localStorage.getItem('guitarras')) localStorage.setItem('guitarras', JSON.stringify(guitarras));

const renderizarTienda = (guitarras) => {

  contenedorProductos.innerHTML = '';

for(const guitarra of guitarras){ 
    
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
botonComprar.className = "btn btn-outline-dark addToCart";

svgProducto.src = guitarra.img;
nombreProducto.append(guitarra.modelo);
precioProducto.append(`$ ${guitarra.precio}`);
botonComprar.append('Comprar');
botonComprar.id = guitarra.id;


botonComprar.onclick = () => {
  const Comprado = guitarras.find(guitarra => guitarra.id === botonComprar.id);
  carrito.push({ modelo: Comprado.modelo, precio: Comprado.precio })
  localStorage.setItem("carrito", JSON.stringify(carrito))
}


divProducto.append(svgProducto, divTitulo, nombreProducto, precioProducto, botonComprar);

container.append(divProducto);

const option = document.createElement('option');
option.value = guitarra.id;
option.text = guitarra.modelo;
selectEliminar.append(option)

}
}
renderizarTienda(JSON.parse(localStorage.getItem('guitarras')))

/* const agregarAlCarrito = document.querySelectorAll(".addToCart");
agregarAlCarrito.forEach(agregar =>{
  agregar.addEventListener("click", () => console.log("click"))
})
 */



const mostrarCarrito = () => {

  

  for (const guitarra of carrito) {
    const nombreProducto = `<h5>Producto : ${guitarra.nombre}</h5>`
    const precioProducto = `<h3>Precio : ${guitarra.precio}</h3>`
    contenedorCarrito.innerHTML += nombreProducto
    contenedorCarrito.innerHTML += precioProducto

  }
    const total = carrito.reduce((accumulador, guitarra) => accumulador + guitarra.precio, 0);
    contenedorCarrito.append(`${total}`);

}
const eliminarProducto = (guitarraId) => {
  selectEliminar.innerHTML = '';
  const guitarras = JSON.parse(localStorage.getItem("guitarras"))
  guitarrasNuevo = guitarras.filter(guitarra => guitarra.id !== guitarraId);
  localStorage.setItem('guitarras', JSON.stringify(guitarrasNuevo))

  renderizarTienda(JSON.parse(localStorage.getItem('guitarras')))


}

btnEliminar.onclick = () => eliminarProducto(selectEliminar.value);

btnCarrito.onclick = mostrarCarrito;