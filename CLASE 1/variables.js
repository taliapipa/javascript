console.log('Javascript en la terminal')


// defino una variable con tipo de dato string o cadenas de caracteres

let cocina = "platos"; 

// defino una variable con tipo de dato numérico

let edad = 25;

// contantes: su contenido nunca cambia en todo el código

const pi = 3.14; //números con decimales con punto no coma

console.log(pi)

// asigno un nuevo valor a la varibale cocina

cocina = "cubiertos";

//la diferencia entre LET y CONST, es que let puede cambiar su valor mientras que const NO puede

const nombre = "Michelle Isabel" // el espacio sigue siendo una cadena de caracteres

// booleanos --> TRUE or FLASE. Como si fuese un interruptor 0 o 1 

let booleanos = false; //cuando tratas de registrate poniendo tu nombre y contraseña la pagina web te da un mensaje con contraseña incorrecta. Se suele usar para los condicionales

// null, underfined palabras reservadas del lenguaje, no llevan comillas

let direccion; 
console.log(direccion)
let pais = null;
console.log(pais)

//objetos una representación de la vida real que tiene una serie de características. Estructuras de datos complejas, compuestas de varias propiedades que contienen clave-> valor, y cada valor puede ser de cualquier tipo de dato

let mascota= {
    nombre: "luna",
    edad: 2,
    raza: "rodwailer",
    direccion: {
        ciudad: "madrid",
        pais: "españa",
    },
};

mascota.raza = "chihuahua";
console.log(mascota.raza)

//CONCATENAR, unir o juntar

console.log("El nombre de la mascota es " + mascota.nombre)

//ARRAY --> lista de elementos

let listaNombre = ["angela", "antonio", "brenda", "danielys"];

console.log(listaNombre[0]);

listaNombre[4] = "manuel";
console.log(listaNombre);


//push --> metodo que permite añadir un elemento al final del array
listaNombre.push("Michelle");

//sustituimos el valor del indice 1
listaNombre[1] = "federico";

// ARRAY COMPLEJO

const alumnos = [
    {
        nombre: "Angela",
        apellido: "García"
    },
    {
        nombre: "Antonio",
        apellido: "Mata",
    },
    {
        nombre: "Talía",
        apellido: "Pérez",
    },
]
console.log(alumnos[2].apellido)

//crear un array de objetos de productos, 3 objetos de productos y que cada producto quiero saber el nombre, el precio y stock.
// console.log() de el nombre y el precio dl producto que esté en la posición 1

const productos = [
    {
        nombre: "queso",
        precio: 5,
        stock: 3,
    },
    {
        nombre: "leche",
        precio: 6,
        stock: 10,
    },
    {
        nombre: "pan",
        precio: 30,
        stock: 2,
    },
];

console.log(productos[0].nombre + " " +productos[0].precio + "€");