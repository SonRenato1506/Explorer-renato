// import { modal } from './modal.js'

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')
// const modalWrapper = document.querySelector(".modal-wrapper")
// const modalMessage = document.querySelector('.modal .title  span')
// const modalBtnClose = document.querySelector('.modal button.close')

form.onsubmit = event => {

    event.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value
    const showAlertError = notANumber(weight) || notANumber(height)

    if(showAlertError) {
        modal.openError()
    }
    else {
        const result = IMC(weight, height)
        const message = `Seu IMC é de ${result}`
        
        modal.message.innerText = message
        modal.closeError()
        modal.open()

    }
}

function notANumber(value) {
    return isNaN(value) || value == ""
}

function IMC(weight, height) {
    return (weight / ((height / 100) ** 2)).toFixed(2)
}
