//Métodos funcionales de array: map., filter, find, findIndex, reduce

//indexOf, splice, push, pop

const personajes = [

      { name: 'batman', tipo: 'heroe', power: 40, defense: 130 },
    
      { name: 'spiderman', tipo: 'heroe', power: 60, defense: 230 },
    
      { name: 'joker', tipo: 'VILLANO', power: 100, defense: 30 },
    
      { name: 'superman', tipo: 'heroe', power: 150, defense: 70 },
    
      { name: 'duende verde', tipo: 'VIllano', power: 90, defense: 110 },
    
      { name: 'Dr. Octopus', tipo: 'villano', power: 220, defense: 150 },
    
    ];

    //MAP: cuando yo busco información internet de datos, la mayoría de las veces no me van a devolver objetos como los del array. Y a mi me interesaría quedarme con los datos que me hagan falta. El map recorre un array y va a crear un nuevo array transformado con las características que tu quieras, dependiendo de las condiciones que tu le hayas proporcionado. 

    const newArray = personajes.map((unElemento)=> {
        return { name: unElemento.name, type: unElemento.tipo };
    });

    console.log(newArray);

    const arrayNuevo = [];
    for(const unElemento of personajes){
        arrayNuevo.push({ name: unElemento.name, type: unElemento.tipo });
    }
    console.log(arrayNuevo);

    //filter: filtra los elementos que cumplan con una condición o que tengan las características que le hemos indicado. Me crea un nuevo array solamente con los elementos filtrados.

    const villanos = personajes.filter((CadaElemento)=>{
        return cadaElemento.tipo.toLowerCase() === "villano";
    })
    .map((cadaElemento)=>{
        return cadaElemento.name;
    })//concatenando varios
    ;

    console.log(villanos);

    //find: me devuelve el primer elemento del array que cumple una condición dada. si hay más de uno a el no le interesa, solo va a devolver el primero que encuentre. Me devuelve un objeto. Si no encuentra ningún elemento que cumpla la función devuelve undefined.

    const findDefense = personajes.find((personaje)=>{
        return personaje.defense < 100;
    });

    console.log(findDefense);

    const findHeroe = personajes.find((personaje)=>{
        return personaje.tipo === "heroe" && personaje.power > 100;
    });
    console.log(findHeroe);

    //findIndex: retorna la posición de un elemento dentro del array, si no la encuentra devuelve -1

    const positionSpiderman = personajes.findIndex((element)=>{
        return element.name === "spdierman";
    });
    console.log(positionSpiderman);

    //reduce: quiero saber la sumatoria de todos

    const totalPower = personajes.reduce((total, unPersonaje)=>
    total + unPersonaje.power, 0);

    // quiero saber el total de defensa que tengo en los personajes que son heroes 

    const totalDefensa = personajes.reduce((total, unPersonaje) => {
        if(personajes.tipo.toLowerCase() === "heroe"){
            acumaldor += personaje.defense;
        }
        return acumulador;
    }, 0);

    console.log(totalDefensa + " defense");
    
    //pintar el listado de tareas en el HTML, cada tarea debe tener un checkbox y al marcarlo debo poner un estilo y tachar la tarea.
    /*1.definir una const con ul que está en el HTML
        2. Recorrer el array con un bucle 
        3. crear el li por cada tarea: createElement
        4. crear un input checkbox con el nombre de la tarea y su padre será el li
        5. crear un label con el nombre de la tarea y su padre será el li
        6. crear el estilo en css con el estilo tachado
        7. escuchar evento sobre los input addEventListener("clidk")
        8. condicional para añadir o quitar una clase
        9l volver a renderizar el array de la lista de tareas, llamar a la funcion
        */


    const tasks = [

          { name: 'Viaje en yate por el mediterráneo', completed: false },
        
          { name: 'Ganarme la lotería', completed: false },
        
          { name: 'Saltar en paracaídas', completed: false },
        
          { name: 'Practicar JavaScript', completed: true },
        
          { name: 'Practicar MONGO', completed: true },
        
          { name: 'Ver un peli', completed: false },
        
        ];

        const ultasks = document.querySelectorAll(".list");
        function renderTasks () {
            for(const task of tasks) {
                const li = document.createElement("li");
                ultasks.appendChild(li);

                const input = document.createElement("input");
                input.setAttribute("type", "checkbos");
                input.classList.add("itemTask");
                li.appendChild(input);

                const label = document.createElement("label");
                label.textContent = task.name;
                li.appendChild(label);

                if(task.completed){
                    li.classList.add("completed");
                    input.checked = true;
                }
            }
            listenerInput();
        }
//las funciones manejadoras de eventos no tienen return

function handlerCheckbox (ev){
    
}
        function listenerInput(){
            const allCheckbox = document.querySelectorAll(".itemTask");
            allCheckbos.forEach((checkbox)=> {
                checkbox.addEventListener("click", handlerCheckbox);
            });
        }

        renderTasks();

