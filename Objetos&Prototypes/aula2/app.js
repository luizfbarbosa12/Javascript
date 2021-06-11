//defineProperty ou defineProperties

function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;
  this.estoque = estoque;
  Object.defineProperty(this, "estoque", {
    enumerable: true, //mostra a chave, mesmo vazia
    value: estoque, //valor
    writable: false, //valor alterável?
    configurable: false, // pode apagar ou editar, reconfigurar a chave?
  });
}

const p1 = new Produto("Camiseta", 20, 3);

console.log(p1);

for (let chave in p1) {
  console.log(chave);
}

//itera pelas chaves do objeto
