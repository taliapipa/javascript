// mouse: click, mouseover, mouseout
// tecla: keypress
// elementos y la mayoría de las veces input, cuando pongo el pulsor encima de un input: focus. Cuando quito el focus de ese input: blur. Cuando estás escribiendo dentro de un input y su value cambia: change.
// formularios: submit, cuando se envíe el formulario; reset, estado original todos los elementos del formulario.
// ventana del navegador: scroll, resize (qué quiero hacer cuando se ha cambiado el tamaño de una pantalla).

//ESCUCHAR UN EVENTO: cuando ocurra esa accion tu vas a desencadenar una serie de funcionalidades. Cuando el usuario haga .... haz .... Todas esas interaciones que realiza el usario y que yo basada en esas interacciones y que yo tengo que responder, tenemos que hacer uso de un evento. 

//FUNCION QUE "ENSUCIAS" HTML

function funcionClick(){
    console.log("me han clicado");
}

//FUNCION DONDE COGEMOS ELEMENTO CSS Y LE DAMOS FUNCION EN EL DOCUMENTO JS. BUENAS PRÁCTICAS. 

const btn = document.querySelector("btn");//llamamos al css

function handlerClick(){
    console.log(ev); //saber información del evento que está ocurriendo
    console.log("boton pulsado");//hacemos una función
}

btn.addEventListener("click", handlerClick)//le damos la función al css

//Cuando haces click en el botón, el va a ir al js y me va a ejecutar la función pero la función el navegador me manda a través de un parámetro toda la información del evento que ha ocurrido, que es el console.log(ev). Porque voy a necesitar la información del "pulsame". Si no necesitas la información te ahorras el (ev).

//EJERCICIO CARD PREVIEW

//1: voy a traerme los eleentos de HTML que voy a necesitar. Buena práctica: al inicio de tu código traer los elementos sobre los cuales vas a trabajar, porque así el codigo está más limpio y organizado.

const name = document.querySelector(".name");
const lastName = document.querySelector(".lastName");
const email = document.querySelector(".email");
const title = document.querySelector(".title");
const subtitle = document.querySelector(".subtitle")

//
const handlerName = (ev) => { //yo necesito saber lo que la persona está escribiendo, y el navegador me manda información gracias a ev y la recojo. 
    const nameValue = ev.target.value; //target es un objeto, esa información la recogemos gracias a target.value value es la propiedad que tiene la información del input y va cambiado según se escriba. 
    title.innerHTML = nameValue; //va a modificar el HTML y va a poner lo que pongas en el input, así escuchas un evento sobre un input y estoy modificando otra sección. 
};

name.addEventListener("keyup", handlerName)//evento keyup

const handlerLastName = (event) =>{
    const lastNameValue = event.target.value;
    title.innerHTML += " " + lastNameValue;//+= quedate con lo que tu tienes y añadele 
} 
lastName.addEventListener("change", handlerLastName)//handler = funciones manejadoras

function handlerEmail(e){
    const emailvalue = e.target.value;
    subtitle.innerHTML = emailvalue;
}
email.addEventListener("input", handlerEmail);//input es un evento que escucha cualquier cambio que suceda en ese input, se suele usar más el input. 

//EJERCICIO: crear 3 inputs de tipo checkbox -> listado de películas. Cuando tu marques un checkbox ev.target.checked -> valor booleano si el elemento está cheaceado o no. Hacer que cuando yo haga click en un input de tipo checkbox y su target sea true se añada a un array el id del elemento checkeado

//1 crear html
//2 crear las variables en JS de los inputs, crear un array para los id checekados
//3 escuchar evento con su funcion
//4 saber cual es el value del checked 
//5 hacer un if para saber si está checkeado o no



const listMovie = document.querySelectorAll(".peli")//variable con todos los inputs
const idMovies = [];//voy a alimentarlo con los datos de los inputs que han sido marcados

for(const movie of listMovie){
    movie.addEventListener("click", handlerMovie)
}

const handlerMovie = (ev)=>{
    const checkedValue = ev.target.checked;
    console.log(checkedValue);
    if (checkedValue) { //verifico si es true o false
        //inclue: retorna true si el elemento se encuentra dentro del array.
        if(idMovies.includes(ev.target.id));//voy a validar que el id que es verdadero ahora no esté en mi array. Así controlamos que no se repita.
        idMovies.push(ev.target.id);
    } else {
        //que hacer cuando el ev.target.checed sea false: 1. buscar posición en el que array del elemento desmarcado. 
        const position = idMovies.indexOf(ev.target.id);
        idMovies.splice(position, 1);//extraigo el elemento de la posición seleccionada

    }
    console.log(idMovies);
}

//métodos funcionales array: push, pop saca un elemento del array, indexOf, findeIndex, find, filter, splice, reduce,...
//indexOf, me devuelve la posición de un elemento del array. 
//splice, me permite sacar un elemento del array, que se encuentra en una posición específica. No como el pop que saca el último. Elimina un elemento del array que se encuentra en una posición indicada. 
//ESTAS FUNCIONES SOLO SIRVEN PARA ARRAYS SIMPLES.

const frutas = ["banana", "peras", "manzana", "uvas"];
console.log(frutas.indexOf("uvas"));
const position = frutas.indexOf("manzana");
//elimina un elemento de array, primer parametro: posición a partir de la cual quiero eliminar; segundo paramentro: cúantos quiero eliminar. 
frutas.splice(position, 1);
console.log(frutas)