// estructuras de control condicional
// Tomar decisiones --> evaluar si una condición se cumple para ejecutar una serie de instrucciones o acciones (sentencias de código)
// siempre en las condiciones vamos a evaluar un valor booleano true y false

// OPERADORES LÓGICOS  && , ||
// OPERADORES COMPARACIÓN te van a devolver siempre true o false -- <, >, <=, >=, ===, !==
let edad = 15;

if(edad >= 18){
    console.log("Puedes conducir");
} else {
    console.log("Te toca esperar");
}

let ingredientes = "huevos"

if(ingredientes=== "huevos"){
    console.log("Haré una tortilla");
} else {
    console.log("Haré solo café");
}

// debo hacer und escuento por franja de edad
// personas menores de 18 entonces el descuento será del 50%
// personas 18 y 30 entonces les haré un descuento del 40%
// personas que estén entre 31 y 60 entonces el descuento será del 25%
// personas mayores de 60 el descuento será del 100%

let age = 18;

if(age < 18){
    console.log("Descuento del 50%");
} else if(age >= 18 && age <=30) {
    console.log("Descuento del 40%");
} else if(age >=31 && age <=60) {
    console.log("Descuento del 25%");
} else {
    console.log("Descuento del 100%");
}
