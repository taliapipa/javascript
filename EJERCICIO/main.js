//Pedir datos a una API, pintar en el HTML el listado de productos haciendo uso de DOM avanzado.
//Por cada producto, hacer clid en un boton + y este se añada a la cesta de la compra, si ledas a - se elimina de la cesta. Una vez en la cesta, debe hacer un boton que diga COMPRAR. Al comprar la cesta se vacíe y me envíe un mensaje con el resumen de lo comprado.


//TAREAS
//0.Crear en el HTML un <section></section> y form para obtener la bebida que quiero buscar
//1. Pedir API 
//2. Mapear idDrink, strDrink, strAlcoholic, strDrinkThumb
//3. Crear un bucle por cada elemento de la API y luego pintarlo en el HTML(creo, modifico, meto)
//4. Crear los botones en HTML y traerlo a JS
//5. Crear Array cesta
//6. Crear un evento sobre el botón del + -> push en el array de la cesta. Función para pintar los datos de la cesta en el HTML.
//6. Evento para que cuando pulses el botón se meta en la cesta
//7. Evento para que cuando pulses de nuevo el botón se quite de la cesta. Pintar los datos de la cesta en el HTML (0 productos)

let drink = ""
let sectionElement = document.querySelector(".list")
const drinkSearch = document.querySelector(".drinkSearch")
const drinkBtnSearch = document.querySelector(".drinkBtnSearch")


//SEARCH

const handlerSearch = (ev) => {
    ev.preventDefault()
    drink = drinkSearch.value;
    console.log(drink)
}

//API

const getDrinks = async () => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`;
    const response = await fetch(url);
    const res = await response.json();
    return res.drinks;
};

//MAP

const mapDrinks = (drinks) => {
    return drinks.map(elemento => ({
        id: elemento.idDrink,
        name: elemento.strDrink,
        alcoholic: elemento.strAlcoholic,
        photo: elemento.strDrinkThumb,
    }));
};

//BUCLE

const renderDrinks = (allDrinks) => {
        sectionElement.innerHTML = "";
    for (const drink of allDrinks) {
        sectionElement.innerHTML += `       <article id="${drink.id}" class="article">
        <img src="${drink.photo}" alt=""></img>
        <h3>${drink.name}</h3>
        <p>${drink.alcoholic}</p>
        <button id="">+</button>
        <button>-</button>
    </article>`;
    }
}


//INIT

const init = async () => {
    const drinks = await getDrinks();
    const mappedDrinks = mapDrinks(drinks);
    renderDrinks(mappedDrinks);
};

init();