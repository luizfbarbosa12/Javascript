const pessoas = [
  { id: 3, nome: "Luiz" },
  { id: 2, nome: "Maria" },
  { id: 1, nome: "Helena" },
];

//nunca pensei nisso aqui :o
const novasPessoas = {};
for (const { id, nome } of pessoas) {
  console.log(id, nome);
}
