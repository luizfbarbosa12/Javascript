// IIFE

(function (idade, peso, altura) {
  const sobrenome = "Pereira";
  function criarNome(nome) {
    return nome + " " + sobrenome;
  }

  function falaNome() {
    console.log(criarNome("Luiz Fernando"));
  }

  falaNome();
  console.log(idade, peso, altura);
})(30, 80, 1.8);
