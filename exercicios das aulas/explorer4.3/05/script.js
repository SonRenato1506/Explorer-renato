/*
  Capture 10 items para compor a lista de um supermercado.
  
  Após capturar os 10 items, imprima-os, separando por vírgula.
*/

let item1 = prompt('Digite o item 1')
let item2 = prompt('Digite o item 2')
let item3 = prompt('Digite o item 3')
let item4 = prompt('Digite o item 4')
let item5 = prompt('Digite o item 5')
let item6 = prompt('Digite o item 6')
let item7 = prompt('Digite o item 7')
let item8 = prompt('Digite o item 8')
let item9 = prompt('Digite o item 9')
let item10 = prompt('Digite o item 10')

let items = [
    item1,
    item2,
    item3,
    item4,
    item5,
    item6,
    item7,
    item8,
    item9,
    item10,
]

alert(items)

/*
  let items = [];

for(let item = 0; item < 2; item++) {
  let itemName = prompt("Digite o item " + (item + 1))

  items[item] = itemName
}

alert(items)
*/