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
const contenedorCarrito = document.getElementById('contenedorCarrito');
const carrito = []

for (const guitarra of guitarras) {
    const divProducto = document.createElement('div');
    const nombreProducto = document.createElement('h5');
    const imgProducto = document.createElement('img');
    const precioProducto = document.createElement('p');
    const botonComprar = document.createElement('button');

    divProducto.className = "card cardNueva";
    nombreProducto.className = "card-title";
    imgProducto.className = "card-img-top";
    precioProducto.className = "card-text";
    botonComprar.className = "btn btn-dark";

    imgProducto.src = guitarra.img;
    nombreProducto.append(guitarra.modelo);
    precioProducto.append(`$${guitarra.precio}`);
    botonComprar.append('Comprar');
    botonComprar.id = guitarra.id;


    botonComprar.onclick = () => {
        const guitarraComprada = guitarras.find(guitarra => guitarra.id === botonComprar.id);
        carrito.push({nombre:guitarraComprada.modelo, precio:guitarraComprada.precio })
      }

      divProducto.append(nombreProducto, imgProducto, precioProducto, botonComprar);

      container.append(divProducto);

}    


const mostrarCarrito = () => {

  for (const guitarra of carrito) {
    const nombreProducto = `<h3>Producto : ${guitarra.nombre}</h3>`
    const precioProducto = `<h3>Precio : ${guitarra.precio}</h3>`
    contenedorCarrito.innerHTML += nombreProducto
    contenedorCarrito.innerHTML += precioProducto
  }

  const total = carrito.reduce((accumulador, guitarra) => accumulador + guitarra.precio, 0);
  contenedorCarrito.append(`${total}`);

}

let btnCarrito = document.getElementById("btnCarrito");
btnCarrito.className = "btn btn-dark";
btnCarrito.onclick = mostrarCarrito;













