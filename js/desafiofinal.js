

const cards = document.getElementById("cards")
const items = document.getElementById("items")
const footer = document.getElementById("footer")
const templateCard = document.getElementById("templateCard").content
const templateFooter = document.getElementById("template-footer").content
const templateCarrito = document.getElementById("template-carrito").content
const fragment = document.createDocumentFragment()
let carrito = {}


/* Eventos */
document.addEventListener('DOMContentLoaded', () =>{
    pedirProd()

    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        renderCarrito()
    }
}) 



cards.addEventListener("click", e =>{
    agregaCarrito(e)
})

items.addEventListener('click', e => { btnSumaRest(e) })

/* Consumir Api */

const pedirProd = async () => {
    const producto = await fetch('./js/api.json')
    const data = await producto.json()
    imprimeCard(data)
}

const imprimeCard = data =>{
      data.forEach(producto => {
          templateCard.querySelector("h5").textContent = producto.modelo
          templateCard.querySelector("p").textContent = producto.precio
          templateCard.querySelector("img").setAttribute("src", producto.img)
          templateCard.querySelector("button").dataset.id = producto.id

          const clone = templateCard.cloneNode(true)
          fragment.appendChild(clone)
      });

      cards.appendChild(fragment)
}

/* Agrega a carrito */

const agregaCarrito = e =>{
 
    if (e.target.classList.contains("btn-dark")){
       
        setCarrito(e.target.parentElement)

    }

    e.stopPropagation()
}

/* Setea Carrito */


const setCarrito = objeto =>{
     const producto = {
         id: objeto.querySelector("button").dataset.id,
         modelo: objeto.querySelector("h5").textContent,
         precio: objeto.querySelector("p").textContent,
         cantidad: 1,
     }

     if (carrito.hasOwnProperty(producto.id)){
         producto.cantidad = carrito[producto.id].cantidad + 1
     }
     
     carrito[producto.id] = {...producto}
     renderCarrito()
    
}

const renderCarrito = () =>{
    
    items.innerHTML = " "

    Object.values(carrito).forEach(producto =>{
        templateCarrito.querySelector("th").textContent = producto.id
        templateCarrito.querySelector(".model").textContent = producto.modelo
        templateCarrito.querySelector(".cntd").textContent = producto.cantidad
        templateCarrito.querySelector(".btnSuma").dataset.id = producto.id
        templateCarrito.querySelector(".btnRest").dataset.id = producto.id
        templateCarrito.querySelector("span").textContent = producto.cantidad * producto.precio

        const clone = templateCarrito.cloneNode(true)
          fragment.appendChild(clone)
    })

    items.appendChild(fragment)

    renderFooter()

    localStorage.setItem("carrito", JSON.stringify(carrito))
}

const renderFooter = () =>{
    footer.innerHTML = ""
    if(Object.keys(carrito).length === 0){
        footer.innerHTML = `
        <th scope="row" colspan="5">Carrito vacío - comience a comprar!</th>
        `
        return
    }

    const nuevoCantidad = Object.values(carrito).reduce((acumulador, {cantidad}) => acumulador + cantidad, 0)
    const nuevoPrecio = Object.values(carrito).reduce((acumulador, {cantidad, precio}) => acumulador + cantidad * precio, 0)
    
    templateFooter.querySelector(".cantid").textContent = nuevoCantidad
    templateFooter.querySelector(".price").textContent = nuevoPrecio

    const clone = templateFooter.cloneNode(true)
    fragment.appendChild(clone)
    footer.appendChild(fragment)

    const btnElimina = document.getElementById("vaciar-carrito")
    btnElimina.addEventListener("click", ()=>{
        carrito = {}
        renderCarrito()
    })

}
/* Botones de sumar y restar productos */

const btnSumaRest = e =>{
    
    if (e.target.classList.contains("btnSuma")) {
        const producto = carrito[e.target.dataset.id]
        producto.cantidad++
        carrito[e.target.dataset.id] = { ...producto }
        renderCarrito()
    }

    if (e.target.classList.contains("btnRest")) {
        const producto = carrito[e.target.dataset.id]
        producto.cantidad--
        if (producto.cantidad === 0) {
            delete carrito[e.target.dataset.id]
        } else {
            carrito[e.target.dataset.id] = {...producto}
        }
        renderCarrito()
    }
    e.stopPropagation()
}

