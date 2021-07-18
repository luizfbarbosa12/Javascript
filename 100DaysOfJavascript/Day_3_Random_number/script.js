const number = document.querySelector('.number')

const generateNumber = () => {
    number.innerHTML = Math.floor(Math.random() * 100 + 1)
}