//objetos são valores passados por referencia

// const produto = { nome: "caneca", preco: 1.8 };
// const outraCoisa = produto;

//como copiar um objeto usando spread operator

// const produto = { nome: "caneca", preco: 1.8 };
// const outraCoisa = { ...produto, material: "porcelana" };
// //para copiar um objeto, também posso usar:
// const caneca = Object.assign({}, produto, { material: "porcelana" });
// // produto.nome = "Luiz Fernando";
// outraCoisa.nome = "Luiz Fernando";
// console.log(caneca);

const produto = { nome: "caneca", preco: 1.8 };
//console.log(Object.keys(produto)); //retorna um array com as chaves dos objetos
// console.log(Object.getOwnPropertyDescriptor(produto, "nome")); //verifica as properties

console.log(Object.entries(produto));
console.log(Object.values(produto));
