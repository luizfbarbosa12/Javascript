//some todos os numeros (reduce)

// const numeros = [5, 50, 80, 1, 2, 3, 5, 7, 11, 15, 22, 27];
// const total = numeros.reduce(
//   (accumulator, currentValue, index, array) => {
//     return (accumulator += currentValue);
//   },

//   0
// );

// console.log(total);

//retornar a pessoa mais velha do array

const pessoas = [
  { name: "Luiz", age: 62 },
  { name: "Maria", age: 23 },
  { name: "Eduardo", age: 55 },
  { name: "Leticia", age: 19 },
  { name: "Rosana", age: 32 },
  { name: "Rafa", age: 88 },
  { name: "Wallace", age: 47 },
];

const oldest = pessoas.reduce((accumulator, currentValue) => {
  if (accumulator.age > currentValue.age) return accumulator;
  return currentValue;
});

console.log(oldest);
