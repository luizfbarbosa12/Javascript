function meuEscopo() {
    const form = document.querySelector('.form');
    const pessoas = []

    const resultado = document.querySelector('.resultado');
          


        function recebeEventoForm(event) {
            event.preventDefault()
            const nome = form.querySelector('.nome').value
            const sobrenome = form.querySelector('.sobrenome').value
            const peso = form.querySelector('.peso').value
            const altura = form.querySelector('.altura').value

            pessoas.push({ 
                nome: nome,
                sobrenome: sobrenome,
                peso: peso,
                altura: altura
            })

            resultado.innerHTML += `<div>
                <p>Nome: ${nome}<p>
                <p>Sobrenome: ${sobrenome}<p>
                <p>Peso: ${peso}<p>
                <p>Altura: ${altura}<p>
                <hr/>
            </div>`

        }

        form.addEventListener('submit', recebeEventoForm);
}

meuEscopo()