// //Isso não funciona em Arrow function

// function funcao() {
//     let total = 0;
//     for (let argumento of arguments) {
//         total += argumento
//     }
//     console.log(total)
// }

// funcao(1, 2, 3, 4, 5, 6, 7)


// function funcao(a, b, c, d ,e, f) {
//     console.log(a, b, c)
// }

// funcao(1, 2, 3)

// function funcao({nome, sobrenome, idade}) {
//     console.log(nome, sobrenome, idade);
// }

// funcao({nome: 'Luiz', sobrenome: 'Barbosa', idade: 26})

// function funcao([valor1, valor2, valor3]) {
//     console.log(valor1, valor2, valor3)
// }

// funcao([1, 2, 3])

function conta(operador, acumulador, ...numeros) { // usando o rest operador, numeros se torna um array com o restante dos argumentos passados
    for(let numero of numeros) {
       if(operador === '+') acumulador += numero
       if(operador === '-') acumulador -= numero
       if(operador === '/') acumulador /= numero
       if(operador === '*') acumulador *= numero
    }
    console.log(acumulador)
}

conta('-', 0, 20, 30, 40, 50)

// Posso usar o ...rest operator toda vez que tiver muitos argumentos numa função e não souber quantos sao, por exemplo. 


