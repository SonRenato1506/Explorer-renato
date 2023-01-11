let numberOne
let numberTwo
let operation

while(operation != "X") {
    operation = prompt(`
    Digite + para somar os 2 numeros
    Digite - para subtrair os 2 numeros
    Digite * para multiplicar os os 2 numeros
    Digite / para dividir os 2 numeros
    Digite R para ver o resto da divisão dos 2 numeros
    Digite X para sair
    `)
    let numberOne = prompt("Digite o primeiro número")
    let numberTwo = prompt("Digite o segundo número")

    if(operation = '+') {
        let soma = numberOne + numberTwo;
        alert (numberOne + " + " + numberTwo + " = " + soma)
    }

    else if(operation = '-') {
        let sub = numberOne - numberTwo;
        alert (numberOne + " - " + numberTwo + " = " + sub)
    }

}