const numero = Number(prompt('digite um número'))

const numeroTitulo = document.getElementById('numero-titulo').innerHTML = numero;



// const raizQuadrada = numero 
// const inteiro = isInterger(numero)
const arredondadoCima = Math.ceil(numero)
const arredondadoBaixo = Math.floor(numero)
const duasCasas = numero.toFixed(2)

const texto = document.getElementById('texto').innerHTML = ` 
<p>Raiz quadrada: ${numero ** 0.5}</p>
<p>${numero} é inteiro: ${Number.isInteger(numero)} </p>
<p>É NaN: ${Number.isNaN(numero)}</p>
<p>Arredondado pra baixo: ${arredondadoBaixo}</p>
<p>Arredondado pra cima: ${arredondadoCima}</p>
<p>Com duas casas decimais: ${duasCasas}</p>
`



