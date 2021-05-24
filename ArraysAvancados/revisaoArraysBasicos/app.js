// const nomes = ["eduardo", "Maria", "Joana"];
// const nomes = new Array("Eduardo");
// //função construtora de arrays
// nomes[2] = "joão";
// delete nomes[2];
// console.log(nomes);
//fatiando um array
// const nomes = ["eduardo", "Maria", "Joana"];
// const novo = nomes.slice(0, 3);
// console.log(novo);

const nome = "Luiz Fernando Barbosa";
//usa o espaço como identificador de onde o js deve deparar itens do array

const nomes = nome.split(" ");
console.log(nomes);
//usa o espaço como identificador pra juntar o array.
const nome = nomes.join(" ");
