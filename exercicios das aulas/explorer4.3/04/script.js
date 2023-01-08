/*
  Solicitar o nome do aluno e as 3 notas
  do bimestre calcular a média daquele aluno.

  A média positiva deverá ser maior que 6

  Se o aluno passou no bimestre, dar os 
  parabéns.

  Se o aluno não passou no bimestre, 
  motivar o aluno a dar seu melhor na prova
  de recuperação.

  Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota
*/

const name = prompt("Qual o seu nome?")
let n1 = prompt("Qual a sua 1 nota")
let n2 = prompt("Qual a sua 2 nota")
let n3 = prompt("Qual a sua 3 nota")

let media = (Number(n1) + Number(n2) + Number(n3)) / 3

media = media.toFixed(2)

if(media >= 6) {
  alert("Parabéns " + name + ", Você passou no Bimestre com a nota média de: " + media)
}

else {
  alert("Que pena " + name + ", Você não passou no Bimestre com a nota média de: " + media)
}

/*
let student = prompt("Qual o nome do(a) aluno(a)?")
let n1 = prompt("Qual a nota da primeira prova?")
let n2 = prompt("Qual a nota da segunda prova?")
let n3 = prompt("Qual a nota da terceira prova?")

let average = (Number(n1) + Number(n2) + Number(n3)) / 3

let result = average > 6

average = average.toFixed(2)

if (result) {
  alert("Parabéns, " + student + "! Sua média foi de: " + average)
} else if (average < 3) {
  alert("Reprovado")
} else {
  alert(student + " estude para sua prova de recuperação! Sua média foi de: " +  average)
}

*/