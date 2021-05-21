function criaPessoa(nome, sobrenome, a, p) {
  return {
    nome,
    sobrenome,
    fala: function (assunto) {
      return `${this.nome} está ${assunto}`;
    },
    altura: a,
    peso: p,
    imc() {
      const indice = this.peso / this.altura ** 2;
      return indice.toFixed(2);
    },
  };
}

const p1 = criaPessoa("Luiz", "Pereira", 1.8, 75);
console.log(p1.fala("falando sobre js"));
console.log(p1.imc());
