console.log("holis")
// bulce -> for(). for of, forEach, while

/*for (let i = 1; i <= 10; i++) {
    console.log(i)
}*/

const productos = [

    { nombre: 'refresco', precio: 3, stock: 50 },
    
    { nombre: 'Chocolate', precio: 5, stock: 150 },
    
    { nombre: 'Pan', precio: 4, stock: 10 },
    
    ];

// Los arrays comienzan en el índice 0

    for(let i = 0; i <= 2; i++){
        console.log("productos " + productos[i].nombre + " precio " + productos[i].precio
        );
    }

    const superheroes = [

          {
        
            name: 'Spiderman',
        
            power: 60,
        
            ciudad: 'nueva york',
        
          },
        
          {
        
            name: 'Hulk',
        
            power: 150,
        
            ciudad: 'boston',
        
          },
        
          {
        
            name: 'Superman',
        
            power: 500,
        
            ciudad: 'chicago',
        
          },
        
        ];

//soy spdierman y mi poder es 60
//soy hulk y mi poder es 150
//soy supermal man y mi poder es 500
//el total de todos mis super poderes es 
let total = 0
for(let i = 0; i < superheroes.length; i++) {
    total = superheroes[i].power + total; //acumulador 
    console.log("Soy " + superheroes[i].name + " y mi poder es " + superheroes[i].power
    );
}
console.log("El total de todos mis super poder es " + total);

// .. ! for..of recorre el array y cada elemento de ese array lo mete en esa variable eachElement
// siempre van a recorrer el array desde principio a fin
for(const eachElement of superheroes) {
    console.log("La ciudad es " + eachElement.ciudad)
}

//forEcha ()-> bucle especificamente para arrays. El forEach va a recorrer cada elemento y lo va a menter en cadaSuperheore
// Es otra estructura iterativa que te permite recorrer un array. 
superheroes.forEach(function(cadaSuperheroe){
    console.log(cadaSuperheroe.name, cadaSuperheroe.ciudad)
})

const mascota = {
    nombre: "lola",
    edad: 5,
    direccion: "barcelona",
};

console.log(mascota.nombre, mascota.edad, mascota.direccion);

// for ... in este bucle recorre las propiedades de un objeto

for(const key in mascota) {
    console.log("la propiedad es " + key + " y el valor es " + mascota[key]); // otra forma de acceder al valor de una propiedad de un objeto
}
// objetos compuestos por clave: valor. La clave es nombre y el valor lola. For in separa el objeto al inicio y en una variable en este caso key. 
//pintar en la consola todas las propiedades de todos SuperHeroe haciendo uso de FOR...IN y el power mayor de 100 que ponga es una máquina


for(const hero of superheroes){ //1 recorre el array y luego el objeto 
    console.log("************") //2 separa cada elemento
    for (const key in hero) { //3 recorre el heroe con el for in y cada una de esas propiedades guardara en key
        console.log("key " + key + " : " + hero[key]) //4 solamente consolear name valor y una vez acabe vuelve otra vez al principio con el siguiente
        if(key === "power" && hero[key] > 100){ //evaluar si el poder es mayor que 100 unicamente cuando la key sea power 
            console.log(" Es una maquina")
        }
    }
}