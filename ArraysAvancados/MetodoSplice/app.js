const nomes = ["maria", "joao", "eduardo", "gabriel", "julia"];

// nomes.splice(indice, delete, elemento1, elemento2, elemento3)

//splice também retorna um array com os itens removidos.
// const removidos = nomes.splice(4, 1);

//pode usar numeros negativos. Dessa forma, começa com o ultimo array e vai de tras pra frente
// const removidos = nomes.splice(-1, 1);
// console.log(removidos);

// const removidos = nomes.splice(-2, Number.MAX_VALUE);
// console.log(nomes, removidos);
// console.log(Number.MAX_VALUE);
//adicionando itens no array: começando no indice 3, remove 2 itens, adiciona luiz e otavio
// const removidos = nomes.splice(3, 2, "luiz", "otavio");
// console.log(removidos);
// console.log(nomes);

//simulando o push
//adiciona depois do ultimo item, remove 0 itens e adiciona 'luiz'
// nomes.splice(nomes.length, 0, "Luiz");
//simulando o unshift
//adiciona no indica 0, deleta 0 itens e adiciona 'Luiz' e "otavio"
nomes.splice(0, 0, "Luiz", "otavio");
console.log(nomes);

//então o splice pode substituir o uso do shift, unshift e do pop
