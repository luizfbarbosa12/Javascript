//=====================CRIANDO UMA CLASSE ==========================

// class Pessoa {
//   //dentro de uma classe, precisamos do método constructor, que funciona da mesma forma que antes de quando faziamos uma função construtora. ele cria os itens do objeto
//   constructor(nome, sobrenome) {
//     this.nome = nome;
//     this.sobrenome = nome;
//   }
// //esse metodo vai direto pro _proto_ automaticamente
//   falar() {
//     console.log(`${this.nome} está falando`);
//   }

// +-
// }

// const pessoa1 = new Pessoa("Luiz", "Barbosa");
// console.log(pessoa1);

//==================GETTERS AND SETTERS===================================
// const _velocidade = Symbol("velocidade"); //gera um id individual
// class Carro {
//   constructor(nome) {
//     this.nome = nome;
//     this[_velocidade] = 0;
//   }
//   //setters PRECISAM receber um valor que será setado, obvio
//   set velocidade(valor) {
//     console.log("setter");
//     if (typeof valor !== "number") return;
//     if (valor >= 100 || valor <= 0) return;
//     this[_velocidade] = valor;
//   }
//   get velocidade() {
//     console.log("getter");
//     return this[_velocidade];
//   }
//   acelerar() {
//     if (this[_velocidade] >= 100) return;
//     this[_velocidade]++;
//   }
//   frear() {
//     if (this[_velocidade] <= 0) return;
//     this[_velocidade]--;
//   }
// }

// const carro1 = new Carro("Fusca");

// // for (let i = 0; i <= 200; i++) {
// //   carro1.acelerar();
// // }
// carro1.velocidade = 99;
// console.log(carro1.velocidade);

//=========================HERANÇA DE CLASSES=======================

// class DispositivoEletronico {
//   constructor(nome) {
//     this.nome = nome;
//     this.ligado = false;
//   }
//   ligar() {
//     if (this.ligado) {
//       console.log(`${this.nome} já está ligado`);
//       return;
//     }
//     this.ligado = true;
//   }

//   desligar() {
//     if (!this.ligado) {
//       console.log(`${this.nome} já está desligado`);
//       return;
//     }
//     this.ligado = false;
//   }
// }
//aqui o Smartphone herda as propriedades de DispositivoEletronico
// class Smartphone extends DispositivoEletronico {
//   constructor(nome, cor, modelo) {
//     super(nome); //tudo que já estiver no construtor da classe pai, vem pra cá. Se quiser trazer mais, só separar por ,
//     this.cor = cor;
//     this.modelo = modelo;
//   }
// }

// const smartphone1 = new Smartphone("Samsung", "Preto", "Galaxy s10");
// console.log(smartphone1);

//================ MÉTODOS DE INSTÂNCIA E ESTÁTICOS======================
//Funções que estão ligados à classe

class ControleRemoto {
  constructor(tv) {
    this.tv = tv;
    this.volume = 0;
  }
  aumentarVolume() {
    this.volume += 2;
  }
  //método de instância. Faz parte da mesma instância
  diminuirVolume() {
    this.volume -= 2;
  }
  //método estático, está ligado à classe
  static trocaPilha() {
    console.log("Ok, vou trocar");
  }
}

const controle1 = new ControleRemoto("LG");
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
ControleRemoto.trocaPilha();
console.log(controle1);
