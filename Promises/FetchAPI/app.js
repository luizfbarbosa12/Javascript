fetch('pagina1.html').then((response) => {
    if(response.status !== 200) throw new Error('My error');
    return response.text()
}).then(html => console.log(html))
.catch(error => console.log(error))


console.warn('alerta')
console.error('error')