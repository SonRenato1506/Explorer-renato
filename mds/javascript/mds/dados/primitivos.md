# Tipos primitivos

- Estes são os principais valores primitivos do Javascript. Diferente dos objetos, que possuem referência, ao alterar um dado primitivo você gera um novo valor, por isso são imutáveis.

- São estes os mais comuns: Boolean , undefined , Number e String.

# Boolean

- Dados do tipo Boolean representam uma entidade lógica e podem ser true (verdadeiro) ou false (falso).
  > Exemplo:

```js
let weekend = false;
```

## Underfined

- O valor underfined é atribuído automaticamente para uma váriavel que não tem atribuição no programa
  > Exemplo:

```js
let appointment;
//Como nenhum valor foi atribuido, appointment recebe underfined
```

### Number

- O Number é um dado do tipo número. Ele pode ser inteiro ou real(float):

```js
let age = 12;
// age é um numero inteiro
```

#### String

- A String é uma cadeia de caracteres, ou seja, um texto.
- Para atribuir uma string a uma variavel você pode usar

```js
" "; // aspas simples
" " // aspas duplas
` `; // template literals, para incluir outras variáveis e expressões dentro da própria string
```

- Você pode declarar da seguinte forma:

```js
let name = "Mayk Brito";
let name = "Mayk Brito";
let name = `Mayk ${1 + 1}`; // aqui o r
```
