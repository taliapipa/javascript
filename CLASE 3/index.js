//blorque de instrucción
// return es opcional, nos permite extraer o sacar información de la función

//ECm6

//arrow function o funciones flechas, son una forma simplificada de definir funciones

const saludar = () => {
    return "Holiss";
};
console.log(saludar());

//si la función flecha solo tiene una línea de código, puedo prescendir de las llaves y del return
const sayHi = () => "Hola como estas"

console.log(sayHi())

//crear una función, que reciba como parámetro un array y un número, y añada el array el número, siempre que el número sea mayor que 50

let listaNumero = [];

const agregarNumero = (array, num) => {
    if(num > 50){
        array.push(num)
    }
}

agregarNumero(listaNumero, 20)
agregarNumero(listaNumero, 60)
agregarNumero(listaNumero, 80)

console.log(listaNumero);