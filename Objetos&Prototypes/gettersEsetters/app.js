function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  Object.defineProperty(this, "estoque", {
    enumerable: true, // mostra a chave
    // value: estoque, //valor
    // writable: true, // pode alterar?
    configurable: true, // configurável?
    get: function () {
      //o trbalho do getter é pegar e exibir um valor
      return estoque;
    },
    set: function (valor) {
      console.log(valor);
    },
  });
}

const p1 = new Produto("Camiseta", 20, 3);
console.log(p1);
console.log(p1.estoque);
p1.estoque = "O valor que eu quero";
//o setter seta um valor
