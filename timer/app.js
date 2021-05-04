const timer = document.querySelector('#timer')
const start = document.querySelector('#start')
const pause = document.querySelector('#pause')
const zero = document.querySelector('#zero')

start.addEventListener('click', (event) => {
    console.log('clicou no iniciar')
})
pause.addEventListener('click', (event) => {
    console.log('clicou no pausar')
})
zero.addEventListener('click', (event) => {
    console.log('clicou no zerar')
})
