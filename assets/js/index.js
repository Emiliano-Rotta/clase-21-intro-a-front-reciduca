const corazon = document.querySelector("h1")
const imagen = document.querySelector("img")
const btnModal  =document.querySelector("button")
const contenedor  =document.querySelector(".contenedor")

corazon.style.display = "none"

function corazonRojo(){
    corazon.style.color = "red"
    corazon.style.display = "block"
}

function cerrarModal(){
    contenedor.style.display = "none"
}

corazon.onclick = corazonRojo
imagen.ondblclick = corazonRojo
btnModal.onclick = cerrarModal