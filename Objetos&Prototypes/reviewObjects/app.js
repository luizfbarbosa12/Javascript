// //maneiras de criar um objeto:

// // const pessoa = {
// //   nome: "Luiz",
// //   sobrenome: "Pereira",
// // };

// // console.log(pessoa["nome"]);
// // console.log(pessoa["sobrenome"]);

// //new Array(); cria um novo array:

// const pessoa1 = new Object();
// pessoa1.nome = "Luiz";
// pessoa1.sobrenome = "Otavio";
// pessoa1.falarNome = function () {
//   console.log(`${this.nome} está falando seu nome`);
// };
// // console.log(pessoa1);

// //métodos de objeto

// pessoa1.falarNome();

//factory functions / constructor functions / classes

// function criaPessoa(nome, sobrenome) {
//   return {
//     nome,
//     sobrenome,
//     get nomeCompleto() {
//       return `${this.nome} ${this.sobrenome}`;
//     },
//   };
// }

// const p1 = criaPessoa("Luiz", "Fernando");
// // console.log(p1.nomeCompleto);
//ou, se nao usar o 'get', pode fazer p1.nomeCompleto() com os parenteses pra executar

function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}

const p1 = new Pessoa("Luiz", "Fernando");
console.log(p1);

//this --> atrela o objeto ao dado
