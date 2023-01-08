/*
  Capturar 2 números
  e fazer as operações matemáticas
  de soma, subtração, multiplicação,
  divisão e resto da divisão.

  E para cada operação, mostrar um alerta
  com o resultado.
*/

let Number1 = prompt("Digite o primeiro número")
let Number2 = prompt("Digite o segundo número")

Number1 = Number(Number1)
Number2 = Number(Number2)

const mais = Number1 + Number2
const menos = Number1 - Number2
const vezes = Number1 * Number2
const divi = Number1 / Number2
const resto = Number1 % Number2

alert(Number1 + "+" + Number2 + "=" + mais)
alert(Number1 + "-" + Number2 + "=" + menos)
alert(Number1 + "*" + Number2 + "=" + vezes)
alert(Number1 + "/" + Number2 + "=" + divi)
alert("O resto da divisão de " + Number1 + " para " + Number2 + " = " + resto)



// let firstNumber = prompt('Digite o primeiro número')
// let secondNumber = prompt('Digite o segundo número')

// firstNumber = Number(firstNumber)
// secondNumber = Number(secondNumber)

// const sum = firstNumber + secondNumber
// const sub = firstNumber - secondNumber
// const multi = firstNumber * secondNumber
// const div = firstNumber / secondNumber
// const restDiv = firstNumber % secondNumber

// alert('Soma: ' + sum)
// alert('Subtração: ' + sub)
// alert('Multiplicação: ' + multi)
// alert('Divisão: ' + div)
// alert('Resto da divisão: ' + restDiv)
