let name = prompt("Qual é seu nome?")
let nota1 = Number(prompt("Qual foi a sua primeira nota?"))
let nota2 = Number(prompt("Qual foi a sua segunda nota?"))

let media = (nota1 + nota2) / 2

if(media >= 7) {
    alert("Parabéns " + name + " você foi aprovado(a) com a nota média de " + media)
}

else {
    alert("Que pena " + name + " você foi reprovado(a) com a nota média de " + media)
}