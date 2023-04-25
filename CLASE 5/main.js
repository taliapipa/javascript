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
    console.log("boton pulsado");//hacemos una función
}

btn.addEventListener("click", handlerClick)//le damos la función al css

//EJERCICIO



