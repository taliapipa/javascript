Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

const newDiv = document.createElement("div");

for (let i = 0; i < 6; i++){
const paragraph = document.createElement("p");
newDiv.appendChild(paragraph);
}



document.body.appendChild(newDiv);
