console.log(window.localStorage.getItem('palabra almacenada'))

let amigosRetStr = window.localStorage.getItem('lista_amigos');

let amigosRet = JSON.parse(amigosRetStr)

// autoinvocar funciones con(function(parametros){inserta funcion})()

document.getElementById('amigos').innerHTML += (function () {
    let html = '';

    amigosRet.forEach(element => {
        html += `<li>${element.name} | ${element.email}</li>`;})
        
    return html
    
})();