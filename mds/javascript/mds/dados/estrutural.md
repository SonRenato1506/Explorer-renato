# Tipos estruturais:

- Dados do tipo estrutural são diferentes dos tipos primitivos, pois apresentam uma “estrutura” com atributos e métodos.
- São estes os mais comuns: OBJECT e ARRAY.

# Object:

- Dados do tipo Object são objetos e possuem atribuitos (propriedades) e métodos (funcionalidades)
- Object é declarada da seguinte forma:

```js
// aqui criamos um Object copo
const copo = {
  material: "vidro", //atributo String
  capacidade: 250, // atributo Number
  cheio: function () {
    // aqui podemos declarar uma função/método que será atribuído ao Object
  },
};
```

## Arrays

- Um dado do tipo Array representa um agrupamento de dados em forma de lista.
- Um Array pode ser declarado da seguinte forma:

```js
// aqui criamos um Array shoppingList
const shoppingList = ["leite", "ovos", "chocolate", 2, 3];
```