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

//hacer una función que reciba como parametro una edad, y retorne un mensaje si puede conducir o no,
// < 18 no puede conducir, >90 no pueden conducir

const puedoConducir = (edad)=>{
    if(edad < 18 || edad > 90){
        console.log("No Puedes conducir")
    }else {
        console.log("Puedo conducir")
    }
}

puedoConducir(33)
puedoConducir(17)
puedoConducir(25)

/*const conducir = (edad) => {
    if(edad < 18 || edad > 90){
        return "No puede conducir";
    } else {
        return "Puede conducir";
    }
};*/

//EC6 Operador ternario --> condicion ? "valor de retorno" : "otro valor de retorno"
//el operador ternario se usa mucho en React

const conducir = (edad) => {
const mensaje = 
edad < 18 || edad > 90 ? "No puede conducir" : "Si puede conducir";
return mensaje
};
console.log(conducir(10))

//crear una función para calcular la edad de los perros en años humanos
/*
    1er año del perro -> 5 años humanos
    2do año del perro --> 3 años humanos
    desde el tercer año --> 2 años humanos

    5 --> 5 + 3 + (2*3) = 14 años
*/

const edadPerro = (edad) => {
    const calculo =
    edad <= 1 ? (5) : edad === 2 ? (5 + 3) : (8 + ((edad - 2) * 2));
    return calculo
};

console.log(edadPerro(5))

const edadHumano = (edadDog)=>{
    let edadHumano = 0;
    if(edadDog === 1){
        edadHumano = 5;
    } else if (edadDog === 2){
        edadHumano = 8;
    } else {
        edadHumano = 8 + (edadDog-2) * 2;
    }
    return edadHumano;
};

console.log(edadHumano(5));

console.log(edadHumano)