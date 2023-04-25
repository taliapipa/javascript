//DOM conjunto de caracteristicas o propiedad que me permiten manipular documentos de XML y HTML. Transformación del fichero, se crea una especie de nodos de jerarquía y esos nodos los voy a poder manipular. 

console.log("holis")

//QUERYS SELECTOR = utiliza los selectores de css: .class, #id, h1. EStos selectores que nosotros conocemos son los básicos. Yo para seleccionar el h1 voy a tener una constante y voy a guardar en esa constante la etiqueta h1. El query selector selecciona el primer elemento que tenga este selector, si hubiese más de una solamente va a seleccionar el primero. 

const title = document.querySelector("h1")

console.log(title);

//si quisiera seleccionar el párrafo 

const p = document.querySelector(".paragraph")

console.log(p)

//si quisiera seleccionar el div

const container = document.querySelector("#container")

//otra manera:

const container1 = document.getElementById("container")

//const container2 = document.getElementByClassName --> selecciona los elementos con una clase dada.
//dcouemtn.getElementByName --> selecciona los elementos con un name indicado

document.querySelectorAll("selector")//me devuelve un array con todos los elementos que tengan ese selector. 

//añadir clases a un elemento del HTML desde el JS
title.classList.add("red");
p.classList.remove("strong");

//desde JS puedo crear nodos. 
const food = ["Pizza", "Hamburguesa", "Brócoli", "Ensalada"];
const list = document.querySelector(".list");

//añadir más de un elemento 

for(const element of food){
    const li = document.createElement("li");//crea etiquetas en html y vas a recibir siempre una etiqueta
    li.textContent = element;//añado texto al <li>
    list.appendChild(li);
}

// crear un article por cada super heroe, <h2></h2>nombre del heroe y p power

const superheroes = [
    { name: "spiderman", power: 60, ciudad: "nueva york" img: },
    { name: "Hulk", power: 150, ciudad: "boston" img:  },
    { name: "Superman", power: 500, ciudad: "chicago" img:},
];
const listHeroes = document.querySelector(".heroes");

for(const eachElement of superheroes){
    const article = document.createElement("article");
    list.appendChild(article);

    const h2 = document.createElement("h2");
    article.appendChild(h2);
    h2.textContent = eachElement.name;

    const p = document.createElement("p");
    article.appendChild(p);
    p.textContent = eachElement.power;

    const img = document.createElement("img")
    img.classList.add("img-heroes");
    img.setAttribute("src", eachElement.img)
    article.appendChild(img)

}

const links = document.querySelectorAll(".link");

for (let i = 0; i < links.length; i++){
    if(links[i].classList.contains("active")){

    }else{
        links[i].classList.add("link-menu")
    }

}


const paises = ["España", "Francia", "Italia"
];
const hobbies = ["leer", "nadar", "crossfit", "ver tv"];

const listHeroes = document.querySelector(".heroes");

for(const eachElement of superheroes){
    const article = document.createElement("article");
    list.appendChild(article);

    const h2 = document.createElement("h2");
    article.appendChild(h2);
    h2.textContent = eachElement.name;

    const p = document.createElement("p");
    article.appendChild(p);
    p.textContent = eachElement.power;

    const img = document.createElement("img")
    img.classList.add("img-heroes");
    img.setAttribute("src", eachElement.img)
    article.appendChild(img)

}