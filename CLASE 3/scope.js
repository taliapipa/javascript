//
/*
let nombre = "luna";
function saluda() {
    if(nombre === "luna") {
        let apellido = "ruiz";
    }
    return apellido;
}

console.log(saluda());

*/

//la variable existe solo dentro de la función y dependiendo de donde definas la variable dentro de las llaves, no importa si es una función, bucle. La variable solo existe dentro de las llaves donde tu la has definido.
//En cualquier estructura de la función lo vas a poder utilizar y si quieres utilizar la variable definela fuera y será una variable global y se accede a ella desde cualquier estructura.

//tengo un array de superhéroes, crea una función que permita crear un nuevo array solo con los héroes que tengan un poder mayor a un valor dado

const superheroes = [

      { name: 'Spiderman', power: 60, ciudad: 'nueva york' },
    
      { name: 'Hulk', power: 150, ciudad: 'boston' },
    
      { name: 'Superman', power: 500, ciudad: 'chicago' },
    
    ];

    /*TIP: DIVIDIR EN TAREAS*/

    /*
    1- Crear la función, con un parámetro, será el poder
    2- Crear el array nuevo
    3- Usar un bucle para recorrer el array
    4- Condicional para obtener los héroes con el poder mayor al indicado
    5- Añadir el elemento al nuevo array mediante push
    */

/*    const nuevoArray = (poder) =>{
        let newArray = [];
        for (const eachElement of superheroes){
                if (eachElement.power > poder) {
                    newArray.push(eachElement);
                }
            };
            return newArray
        };

console.log(nuevoArray(100))

let newArray = [];
const heroe = (power) => {
    superheroes.forEach((heroe)=>{
        if (power < heroe.power) {
            newArray.push(heroe);
        }
    });
};

heroe(140);
console.log(newArray);

const heroes = (poder) => {
    const newArray = [];
    for (let i = 0punto de partida; i < superheroes.length punto de parada; i++){
        if(superheroes[i].power > poder){
            newArray.push(superheores[i]);
        }
    }
    return newArray;
}

console.log(heroes(50));*/

//crear una funcion que devuelva a los superheroes cuyo poder sea mayor el poder promedio

/*
1- Una función que calcule el promedio de los poderes
2- Función que solo me devuelva los superheroes cuyo poder es mayor que el promedio
*/

const poderPromedio = ()=> {
    let total = 0;
    for(const eachHeroe of superheroes){
        total = total + eachHeroe.power;
    }
    const prom = total / superheroes.length;
    return prom 
}

const newArray = []
function mayoresPromedio () {
    const prom = poderPromedio();
    for(const eachHeroe of superheroes){
        if(eachHeroe.power > prom){
            newArray.push(eachHeroe)
        }
    }
}

mayoresPromedio();

//siempre que le diga que hay que validar los elementos de un array hay que hacer un bucle. Los arrays siempre están ligados a un buble. 

function encontrarIndice(arr, elemento) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === elemento) {
      return i;
    }
  }
  return -1;
}

var miArray = ['manzana', 'naranja', 'pera', 'plátano'];
var indicePera = encontrarIndice(miArray, 'pera');
console.log(indicePera);