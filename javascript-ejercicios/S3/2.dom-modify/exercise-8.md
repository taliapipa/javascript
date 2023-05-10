Basandote en el siguiente html,inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
   <div></div>
   <div></div>
</body>
</html>```

const paragraph = document.createElement("p");
paragrapgh.textContent = "Voy en medio!";

const firstDiv = document.querySelector("div:first-of-type");
firstDiv.insertAdjacentElement("afterend", paragraph);