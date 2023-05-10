Añade un botón a tu html con el id btnToClick y en tu javascript añade el evento click que ejecute un console log con la información del evento del click

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

</body>
</html>```

const btn = document.createElement("button");
btn.setAttribute('id', 'btnToClick');
btn.textContent = ("Haz click");
document.body.appenchild(btn);

btn.addEventListener("click", function(event){
      console.log("Información del evento de clic:", event);
});
