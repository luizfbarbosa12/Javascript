// NodeFilter, map e reduce = métodos

//Retorne os numeros maiores que 10.
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
//filter recebe 3 parametros: valor, index e array, nessa ordem
// function callbackFilter(valor, index, array) {
//   return valor > 10;
// // }

// const numerosFiltrados = numeros.filter((valor) => {
//   return valor > 10;
// });
// //também funciona
// // const numerosFiltrados = numeros.filter((valor) => valor > 10);
// console.log(numerosFiltrados);

/*Retorne as pessoas que tem o nome com 5 letars ou mais
Retorne as pessoas com mais de 50 anos
retorne as pessoas cujo nome termina com a
*/

const pessoas = [
  { name: "Luiz", age: 62 },
  { name: "Maria", age: 23 },
  { name: "Eduardo", age: 55 },
  { name: "Leticia", age: 19 },
  { name: "Rosana", age: 32 },
  { name: "Wallace", age: 47 },
];

// const longNames = pessoas.filter((object) => {
//   return object.name.length > 5;
// });

// console.log(longNames);

// const olderPeople = pessoas.filter((pessoa) => pessoa.age > 50);

// console.log(olderPeople);

// const endsInA = pessoas.filter((pessoa) => {
//   return pessoa.name[pessoa.name.length - 1] === "a"
// });
const endsInA = pessoas.filter((pessoa) => {
  return pessoa.name.endsWith("a");
});

console.log(endsInA);
