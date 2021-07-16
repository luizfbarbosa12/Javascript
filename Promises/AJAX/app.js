// AJAX - Asyncronous Javascript XML request - faz requisição de qualquer coisa (json, xml, http)


const request = (obj) => {
    xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true);
    xhr.send();

    xhr.addEventListener('load', () => {
        if(xhr.status() >= 200 && xhr.status < 300) {
            obj.success(xhr.responseText);
        } else {
            obj.error ({
                code: xhr.status,
                msg: xhr.statusText
            })
        }
    })
}

document.addEventListener('click', e => {
    const el = e.target
    const tag = el.tagName.toLowerCase();

    if (tag === 'a') {
        e.preventDefault();
        carregaPagina(el);
    }
})

function carregaPagina(el) {
    const href = el.getAttribute('href');

    request({
        methor: 'GET',
        url: href,
        success(response) {
            carregaResultado(responst);
        },
        error(errorText) {
            console.log(errorText)
        }
    })
}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}