//Exercicio 1
//Escreva uma função que recebe dois números e retorne o maior deles.


// const maiorNumero = (numero1, numero2) => numero1 > numero2 ? numero1 : numero2;


// console.log(maiorNumero(55, 10))

//Exercicio 2 
// Escreva uma função chamada ePaisagem que recebe dois argumentos, largura e altura de uma imagem (number). Retorne true se a imagem estiver no modo paisagem.

// const ePaisagem = (largura, altura) => largura >= altura 


// console.log(ePaisagem(250, 150))

/* Escreva uma função que recebe um número e retorne o seguinte: 
Numero é divisível por 3 = Fizz
Numero é divisível por 5 = buzz
Numero é divisível por 3 e 5 = FizzBuzz
Numero não é divisível por 3 e 5 = Retorna o próprio numero
Checar se o numero é realmente um número = Retorna o valor recebido
Use a função com números de 0 a 100.
*/


const fizzBuzz = () => {
    for(let i = 0; i <= 100; i++) {
        if(i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz')
        } else if (i % 5 === 0) {
            console.log('Buzz')
        } else if (i % 3 === 0) {
            console.log('Fizz')
        } else {
            console.log(i)
        }
    }
}


fizzBuzz()