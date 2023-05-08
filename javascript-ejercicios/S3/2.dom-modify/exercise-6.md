Basandote en el siguiente array crea una lista ul > li con los textos del array.

```js
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
```

const newList = document.createElement("ul")

for (i = 0; i < apps.length; i++) {
    const li = document.createElemente("li")
    li = apps[i];
    newList.appendChild(li);
}

document.body.ul.appendChild(li);
