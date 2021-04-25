const escopoTotal = () => {
    let height = Number(document.getElementById('height').value)
    let weight = Number(document.getElementById('weight').value)
    let form = document.querySelector('.form')
    let imc = document.querySelector('.resultado')
    let mensagem;
    const recebeEventoForm = (event) => {
        event.preventDefault()
        console.log(`Sua altura é: ${height} e seu peso é ${weight}`)
        imc = weight/ (height * height)

        if(imc < 18.5) {
            mensagem = "(Abaixo do peso)"
        } else if(imc > 18.5 && imc < 24.9) {
            mensagem = "(Peso normal)"
        } else if(imc > 25 && imc < 29.9) {
            mensagem = "(Sobrepeso)"
        } else if(imc > 30 && imc < 34.9) {
            mensagem = "(Obesidade grau 1)"
        } else if(imc > 35 && imc < 39.9) {
            mensagem = "(Obesidade grau 2)"
        } else if(imc > 40) {
            mensagem = "(Obesidade grau 3)"
        } else {
            alert("Favor inserir um valor válido nos campos")
        }
        console.log(imc.toFixed(2), height, weight)
        imc.innerHTML = `Seu IMC é ${imc} ${mensagem}`
    }
    form.addEventListener('submit', recebeEventoForm)
}


