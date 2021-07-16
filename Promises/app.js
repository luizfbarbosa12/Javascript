const random = (min = 1, max = 3) => {
    min *= 1000
    max*= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

function waitUp(message, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(message);
        }, time)
    })   
}


waitUp('Frase 1', random(1, 3)).then((response) => {
    console.log(response)
})

const promises = ['primeiro valor', waitUp('promise1', 3000), waitUp('promise2', 500), waitUp('promise3', 1000), 'outro valor'];
//promise all tenta resolver todas, se qualquer uma der erro, ele para
// Promise.all(promises).then((valor) => {
//     console.log(valor);
// }).catch((error) => {
//     console.log(error)
// })
//tenta resolver todas e retorna a primeira que for resolvida
// Promise.race(promises).then((valor) => {
//          console.log(valor);
//      }).catch((error) => {
//          console.log(error)
//  })

 //sempre que a promise cai e reject(), vamos receber um erro, que é capturado no catch()


 //ASYNC AWAIT

 async function executa() {

    try {
        const fase1 =  await waitUp('Fase1', random());
        console.log(fase1)
     
        const fase2 =  await waitUp(5, random());
        console.log(fase2)
        const fase3 =  await waitUp('fase3', random());
        console.log(fase3)
    } catch(error) {
        console.log(error)
    }
 }

 executa()