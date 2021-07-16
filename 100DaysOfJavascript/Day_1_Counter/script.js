
// let subtract = document.querySelector('.subtract')
// let addBtn = document.querySelector('.add')
// let resetCount = document.querySelector('.reset')
let counter = document.querySelector('.counter')
let buttons = document.querySelector('.buttons')


buttons.addEventListener('click', (event) => {
    if(event.target.classList.contains('add')) {
        counter.innerHTML++
        setColor()
    
    }

    if(event.target.classList.contains('subtract')) {
        counter.innerHTML--
        setColor()
    }

    if(event.target.classList.contains('reset')) {
        counter.innerHTML = 0
        setColor()
    }
})

function setColor() {
if(counter.innerHTML > 0) {
   counter.style.color = 'yellow'
} else if(counter.innerHTML < 0) {
    counter.style.color = 'red'
} else {
    counter.style.color = '#fff'
}
}




// addBtn.addEventListener('click', () => {
//     counter.innerHTML++
// })

// subtract.addEventListener('click', () => {
//     counter.innerHTML--
// })

// resetCount.addEventListener('click', () => {
//     counter.innerHTML = 0
// })

// const add = () => {
//    let currentValue = Number(counter);
//    let newValue = currentValue += 1;
   
//    console.log(newValue)
// }



