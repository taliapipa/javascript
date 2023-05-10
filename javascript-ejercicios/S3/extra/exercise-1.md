Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.

```js
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
```

const ul = document.createElement("ul");

for(const country of countries) {
    const li = document.createElement("li");
    ul.appendchild(li);
    li.textContent = country;
};

document.body.appendchild(ul)