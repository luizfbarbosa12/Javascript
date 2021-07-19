const popUp = document.querySelector('.popup')

function showPopUp() {
    popUp.classList.add('show')
}

function hidePopUp() {
    popUp.classList.remove('show')
}

document.addEventListener('click', (event) => {
    console.log(event)
})