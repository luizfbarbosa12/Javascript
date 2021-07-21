const result = document.querySelector('.result')

function checkWord() {
    const word = document.querySelector('.word').value.toLowerCase()
        let newWord = "";
        for (let i = word.length - 1; i >= 0; i--) {
            newWord += word[i];
        }

        if(newWord === word) {
            result.innerHTML = `${word} é um palindromo`
        } else {
            result.innerHTML = `${word} não é um palindromo`
        }       
}

