//FUNCIONES

/*
function NOMBRE_FUNCION (){
    contenido de la función, será un conjunto de instrucciones 
    operaciones con array, operaciones aritméticas, condicionales
    crear variables, crear objetos, 
    llamar a otras funciones
    Entre los parentesis puede recibir parametros (no es obligado)
}
*/

function saludar(nombre) {
    console.log("Bienvenido " + nombre);
}

saludar("Talía");
saludar("Luis");

//Hacer una función que reciba como parámetro una edad y pinte un mensaje si puede conducir o no

function puedoConducir(edad){
    if(edad >= 18){
        console.log("Puedo conducir")
    }else{
        console.log("Debes esperar a cumplir los 18 años")
    }
}

puedoConducir(23)
puedoConducir(17)
// las variables que estén definidas dentro de la funcion no existen fuera, lo que defines dentro se queda dentro. 
function suma(num1, num2) {
    let total = num1 + num2
    return total;
}
console.log(suma(10, 20));

//función que calcule el IVA de un precio dado y retorne el precio con IVA y sin IVA

function impuestos(producto) {
    let iva = 21;
    let precioBruto = (producto * iva)/100;
    let precioNeto = producto;
    console.log("Precio del producto: " + producto)
    let total = precioBruto + precioNeto;
    return "Precio del producto " + total;
}

console.log(impuestos(33));