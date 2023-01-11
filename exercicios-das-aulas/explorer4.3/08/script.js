/* 
  Crie uma lista de pacientes

  Cada paciente dentro da lista, deverá conter
    nome
    idade
    peso
    altura

  Escreva uma lista contendo o nome dos pacientes
*/

const pacientes = [
    {
        nome: "Renato",
        idade: 14,
        peso: 45,
        altura: 1.78,  
    },
    {
        nome: "Arthur",
        idade: 0,
        peso: 10,
        altura: 0.60,
    },
    {
        nome: "Mônica",
        idade: 34,
        peso: 70,
        altura: 1.70,
    },
    {
      nome: "Marcio",
      idade: 35,
      peso: 80,
      altura: 1.83,
    }
]

let pacientesStats = []

for(let paciente of pacientes) {
  pacientesStats.push(paciente.nome, paciente.idade, paciente.peso, paciente.altura)
}

alert(pacientesStats)