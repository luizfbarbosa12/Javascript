//new Object -> Object.prototype

const objA = {
  chaveA: "A",
  //_proto_: Object --> é um objeto pai de todos os objetos
};

//new Object -> Object.prototype

const objB = {
  chaveB: "B",
  //_proto_: Object --> é um objeto pai de todos os objetos
};

Object.setPrototypeOf(objB, objA);
console.dir(objB.chaveA);
