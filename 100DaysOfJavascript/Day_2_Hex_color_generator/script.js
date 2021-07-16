const characters = 'ABCDEF0123456789';
const randomNumber = () => {
   return Math.floor(Math.random() * 16)
}

const hexGenerator = () => {
    let char1 = characters.charAt(randomNumber());
    let char2 = characters.charAt(randomNumber());
    let char3 = characters.charAt(randomNumber());
    let char4 = characters.charAt(randomNumber());
    let char5 = characters.charAt(randomNumber());
    let char6 = characters.charAt(randomNumber());

    return `#${char1}${char2}${char3}${char4}${char5}${char6}`
}

let currentHex = document.querySelector('.hex');

function changeHex() {
    currentHex.innerHTML = hexGenerator()
    document.body.style.backgroundColor = currentHex.innerHTML
    return currentHex;
}


//DIFFERENT SOLUTION: 

/*
    let randomColor = Math.random().toString(16).substring(2,8);

*/


