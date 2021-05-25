//dobre os numeros

// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// const doubleNumbers = numeros.map((item) => {
//   return item * 2;
// });

// console.log(doubleNumbers);

const pessoas = [
  { name: "Luiz", age: 62 },
  { name: "Maria", age: 23 },
  { name: "Eduardo", age: 55 },
  { name: "Leticia", age: 19 },
  { name: "Rosana", age: 32 },
  { name: "Wallace", age: 47 },
];

// const idades = pessoas.map((item) => {
//   return item.age;
// });
// const idades = pessoas.map((pessoa) => {
//   return { idade: pessoa.age };
// });
// const addId = pessoas.map((pessoa, index) => {
//   return { ...pessoa, id: index };
// });

// console.log(addId);
//criando um novo objeto, eu não altero o array original
const addId = pessoas.map((pessoa, index) => {
  const newPessoa = { ...pessoa };
  newPessoa.id = index;
  return newPessoa;
});

console.log(addId);

// const objetoMapeado = pessoas.map((pessoa) => {
//   return pessoa.name;
// });

// console.log(objetoMapeado);
