const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}
];

const print = document.querySelector('#container')

// for(let i = 0; i < elementos.length; i++) {
//     const createdElements = document.createElement(elementos[i].tag)
//     print.appendChild(createdElements)
// }

for(let i = 0; i < elementos.length; i++) {
    let { tag, texto} = elementos[i]
    let tagCriada = document.createElement(tag);
    // tagCriada.innerHTML = texto;
    tagCriada.innerText = texto;
    print.appendChild(tagCriada)
}
