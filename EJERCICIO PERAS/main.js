/*

Crea un objeto que sea una cesta de peras y que debe tener varias propiedades:

Número máximo de peras

Número mínimo de peras

Número actual de peras

Número inicial de peras

Y varios métodos que hagan:

Añadir al cesto una pera

Sacar del cesto una pera

Restablecer el número de peras al valor inicial.

Con la ayuda de console.log probaremos a usar varios métodos distintos y comprobar el número actual de peras para ver si funciona correctamente.

*/

// Creamos un objeto "CestaDePeras"
const CestaDePeras = {
    numeroMaxPeras: 10, // Número máximo de peras
    numeroMinPeras: 0, // Número mínimo de peras
    numeroActualPeras: 5, // Número actual de peras
    numeroInicialPeras: 5, // Número inicial de peras
    
    // Método para añadir una pera a la cesta
    añadirPera: function() {
    if (this.numeroActualPeras < this.numeroMaxPeras) {
    this.numeroActualPeras++; // Añadimos una pera
    console.log("Se ha añadido una pera a la cesta. Número actual de peras: " + this.numeroActualPeras);
    } else {
    console.log("No se pueden añadir más peras. La cesta está llena.");
    }
    },
    
    // Método para sacar una pera de la cesta
    sacarPera: function() {
    if (this.numeroActualPeras > this.numeroMinPeras) {
    this.numeroActualPeras--; // Sacamos una pera
    console.log("Se ha sacado una pera de la cesta. Número actual de peras: " + this.numeroActualPeras);
    } else {
    console.log("No se pueden sacar más peras. La cesta está vacía.");
    }
    },
    
    // Método para restablecer el número de peras al valor inicial
    restablecerPeras: function() {
    this.numeroActualPeras = this.numeroInicialPeras; // Restablecemos el número de peras al valor inicial
    console.log("El número actual de peras se ha restablecido al valor inicial: " + this.numeroActualPeras);
    }
    }
    
    // Probamos los métodos del objeto "CestaDePeras"
    CestaDePeras.añadirPera(); // Número actual de peras: 6
    CestaDePeras.sacarPera(); // Número actual de peras: 5
    CestaDePeras.sacarPera(); // Número actual de peras: 4
    CestaDePeras.añadirPera(); // Número actual de peras: 5
    CestaDePeras.restablecerPeras(); // Número actual de peras: 5 (valor inicial)


const array = [
    {
        nombre: "maria",
        profesion: "diseñadora",
        edad: function () {
            return 29
        }
    },
    {
        nombre: "lucia",
        profesion: "ingeniera quimica",
        edad: function () {
            return 31
        }
    },
    {
        nombre: "susana",
        profesion: "periodista",
        edad: function () {
            return 34
        }
    },
    {
        nombre: "rocio",
        profesion: "actriz",
        edad: function () {
            return 25
        }
    },
    {
        nombre: "inmaculada",
        profesion: "diseñadora",
        edad: function () {
            return 21
        }
    },
]

//DEVUELVA EL PROMEDIO DE EDAD DE LAS PERSONAS

function calcularPromedioEdad(array) {
    let sumaEdades = 0;
    for (const persona of array) {
    sumaEdades += persona.edad();
    }
    const promedioEdad = sumaEdades / array.length;
    return promedioEdad;
}
