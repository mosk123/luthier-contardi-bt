/* Codigo 1 -- Arrays de Objetos  */

const guitarras =[{id: 1, modelo: "Amb", precio: 120000},
                  {id: 2, modelo: "Cer", precio: 115000},
                  {id: 3, modelo: "Pot", precio: 230000},
                  {id: 4, modelo: "Htr", precio: 85000},
                  {id: 5, modelo: "Rew", precio: 75000},
                  {id: 6, modelo: "Ctr", precio: 95000},
                  {id: 7, modelo: "Abc", precio: 35000},
                  {id: 8, modelo: "Qsf", precio: 300000},
                  {id: 9, modelo: "Afd", precio: 55000}]

let pregunta = prompt("¿Desea conocer nuestros productos?");

if(pregunta.toUpperCase() == "SI"){
    for (const guitarra of guitarras) {
        console.log("Opcion " + guitarra.id + "-" + guitarra.modelo + " a "+ "$ " + guitarra.precio);
    }
}else{
    alert("Gracias por visitarnos. Vuelva pronto.");
}
/* FUNCION Boton "BUSCAR"  */

const buscar = prompt("Ingrese el modelo que busca")

const buscaModelo = guitarras.find(guitarra => guitarra.modelo === buscar)

console.log(buscaModelo)

/* Codigo 2 Contructor */ 

class Guitarra{

    constructor(modelo,precio){
        this.modelo= modelo;
        this.precio= precio;
    }
}
const guitarra1 = new Guitarra("Amb", 120000,);
const guitarra2 = new Guitarra("Cer", 115000,);
const guitarra3 = new Guitarra("Pot", 230000,);
const guitarra4 = new Guitarra("Htr", 85000,);
const guitarra5 = new Guitarra("Rew", 75000,);
const guitarra6 = new Guitarra("Ctr", 95000,);
const guitarra7 = new Guitarra("Abc", 35000);
const guitarra8 = new Guitarra("Qsf", 300000);
const guitarra9 = new Guitarra("Afd", 55000);

/* Codigo 3 COMPRA CON CARRITO*/
const carrito =[]

let compra = prompt("Agregue su guitarra al carrito de compras indicando el modelo elegido, tal como esta escrito");

if (compra == "Amb") {
    carrito.push(guitarra1);
}
else if (compra == "Cer") {
    carrito.push(guitarra2);
}
else if (compra == "Pot") {
    carrito.push(guitarra3);
}
else if (compra == "Htr") {
    carrito.push(guitarra4);
}
else if (compra == "Rew") {
    carrito.push(guitarra5);
}
else if (compra == "Ctr") {
    carrito.push(guitarra6);
}
else if (compra == "Abc") {
    carrito.push(guitarra7);
}
else if (compra == "Qsf") {
    carrito.push(guitarra8);
}
else if (compra == "Afd") {
    carrito.push(guitarra9);
}
else (compra == "no")
    alert("gracias");

console.log(carrito); 

/* ELIMINO 1 OBJETO DEL ARRAY (CARRITO)*/
let elimino = prompt("¿Desea eliminar del carrito?");

if(elimino == "si"){
    carrito.pop(carrito)
}
else(elimino == "no")
    alert("gracias")


