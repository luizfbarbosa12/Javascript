//O forEach basicamente itera pelo array e só. Mesma coisa que o for in e for of
const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let total = 0;
array1.forEach((value, index, array) => {
  total += value;
});
console.log(total);
