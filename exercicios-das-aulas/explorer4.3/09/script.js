/* 
  Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima

  "Paciente X possui o IMC de: Y"

  Onde X é o nome do paciente e Y é o IMC desse paciente

  Crie uma função para fazer o cálculo de IMC
*/

/* peso / (altura * altura) */

const patients = [
    {
      name: "Renato",
      age: 14,
      weight: 50,
      height: 177
    },
    {
      name: "Mônica",
      age: 33,
      weight: 74,
      height: 164
    },
    {
      name: "Marcio",
      age: 34,
      weight: 95,
      height: 183
    },
  ]
  
  function IMC(weight, height) {
    return (weight / ((height / 100) ** 2)).toFixed(2)
  }
  
  function printPatientIMC(patient) {
    return `
      Paciente ${patient.name} possui o IMC de
      ${IMC(patient.weight, patient.height)}
    `
  }
  
  for (let patient of patients) {
    let IMCmessage = printPatientIMC(patient)
    alert(IMCmessage)
  }