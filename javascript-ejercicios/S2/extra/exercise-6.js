function swap (array, index1, index2) {
    const temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
}

const newArray = ["Mesirve", "Cristiano Romualdo", "Fernando Muralla", "Ronalguiño"];

swap (newArray, 0, 1);
console.log(newArray);