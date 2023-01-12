let operation = prompt(`
    Digite 1 para somar os 2 numeros
    Digite 2 para subtrair os 2 numeros
    Digite 3 para multiplicar os os 2 numeros
    Digite 4 para dividir os 2 numeros
    Digite 5 para ver o resto da divisão dos 2 numeros
    Digite 6 para sair
    `)
    let numberOne
    let numberTwo
    let parImpar

switch (operation) {
    case "1":
        numberOne = Number(prompt("Digite o primeiro número"))
        numberTwo = Number(prompt("Digite o segundo número"))
        let soma = numberOne + numberTwo;
        parImpar = soma % 2
        switch(parImpar) {
            case 0:
                parImpar = "par"
                break
            default:
                parImpar = "impar"
                break
        }
        alert(numberOne + " + " + numberTwo + " = " + soma + " , e seu numero é " + parImpar)
        break
    case "2":
        numberOne = Number(prompt("Digite o primeiro número"))
        numberTwo = Number(prompt("Digite o segundo número"))
        let sub = numberOne - numberTwo;
        parImpar = sub % 2
        switch(parImpar) {
            case 0:
                parImpar = "par"
                break
            default:
                parImpar = "impar"
                break
        }
        alert(numberOne + " - " + numberTwo + " = " + sub + " , e seu numero é " + parImpar)
        break
    case "3":
        numberOne = Number(prompt("Digite o primeiro número"))
        numberTwo = Number(prompt("Digite o segundo número"))
        let mult = numberOne * numberTwo;
        parImpar = mult % 2
        switch(parImpar) {
            case 0:
                parImpar = "par"
                break
            default:
                parImpar = "impar"
                break
        }
        alert(numberOne + " * " + numberTwo + " = " + mult + " , e seu numero é " + parImpar)
        break
    case "4":
        numberOne = Number(prompt("Digite o primeiro número"))
        numberTwo = Number(prompt("Digite o segundo número"))
        let div = numberOne / numberTwo;
        parImpar = div % 2
        switch(parImpar) {
            case 0:
                parImpar = "par"
                break
            default:
                parImpar = "impar"
                break
        }
        alert(numberOne + " / " + numberTwo + " = " + div + " , e seu numero é " + parImpar)
        break
    case "5":
        numberOne = Number(prompt("Digite o primeiro número"))
        numberTwo = Number(prompt("Digite o segundo número"))
        let res = numberOne % numberTwo;
        parImpar = res % 2
        switch(parImpar) {
            case 0:
                parImpar = "par"
                break
            default:
                parImpar = "impar"
                break
        }
        alert(`O resto da divisão de ${numberOne} por ${numberTwo} é ${res}  , e seu numero é  + ${parImpar}`)
        break
    default:
        alert("Tchau")
}