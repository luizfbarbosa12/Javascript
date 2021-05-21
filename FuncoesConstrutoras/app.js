//função construtora retorna objetos, igual a função fábrica
//São um molde de novos objetos.

function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;

  this.metodo = () => {
    console.log(this.nome + ": sou um método");
  };
}

//com funções construtoras não esquecer de usar new
const p1 = new Pessoa("luiz", "Fernando");
const p2 = new Pessoa("Brendha", "Luiza");
p2.metodo();
