const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];

rickAndMortyCharacters.push("Morty", "Summer");
console.log(rickAndMortyCharacters[rickAndMortyCharacters.length - 1]); 

//En el código original, la expresión rickAndMortyCharacters.length - 1 se utilizó para obtener el índice del último elemento del array. En JavaScript, los índices de los elementos de un array empiezan en cero, por lo que para obtener el índice del último elemento, se debe restar 1 al tamaño del array. Una vez que tenemos el índice del último elemento, lo utilizamos para acceder a dicho elemento mediante el operador de corchetes ([]). Por lo tanto, rickAndMortyCharacters[rickAndMortyCharacters.length - 1] devuelve el valor del último elemento del array rickAndMortyCharacters.

