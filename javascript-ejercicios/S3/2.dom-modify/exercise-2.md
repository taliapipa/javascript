Inserta dinamicamente en un html un div que contenga una p con javascript.

const newDiv = document.createElement("div");

const newP = document.createElement("p");

newDiv.appendChild(newP);

document.body.appendChild(newDiv);

