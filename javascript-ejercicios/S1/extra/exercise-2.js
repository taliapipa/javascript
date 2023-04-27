
for (let i = 0; i < foodSchedule.length; i++) {
    const food = foodSchedule[i];
    if(food.isVegan){
        food.name = fruits.shift();
    }
}
//Dentro del bucle, se verifica si la propiedad isVegan del objeto food es falsa. Si es así, se usa el método shift() para eliminar y retornar el primer elemento del array fruits, que luego se asigna a la propiedad name del objeto food.