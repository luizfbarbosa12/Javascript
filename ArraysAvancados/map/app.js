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

// const objetoMapeado = pessoas.map((pessoa) => {
//   return pessoa.name;
// });

// console.log(objetoMapeado);

const idades = pessoas.map((pessoa) => {
  return { idade: pessoa.idade };
});

console.log(idades);
