document.getElementById('titulo').innerHTML ='Fake news';

document.getElementById('PatReal').innerHTML = 'El Patriarcado es mas antiguo que el Universo. De hecho, el Big Bang se dio en base a la revolucion feminista de las particulas subatomicas que sentian que la sociedad solo tenia en cuenta a protones, ignorando a los cruciales electrones y a los neurtrones, que estaban ahi aguantando los tios'

let elTitulo = document.getElementById('titulo')

let elParr = document.getElementById('PatReal')

let cambiarBoton = document.getElementById('boton')

cambiarBoton.onclick = function (){
    elTitulo.innerHTML = 'Pradva';
    elParr.innerHTML = 'Tu manera de escribir me da cancer';
    elParr.style.color = 'red';
    }

let cambiarBoton2 = document.getElementById('boton2')

cambiarBoton2.onclick = function (){
    elTitulo.innerHTML = elTitulo.innerHTML.toUpperCase()
    elParr.innerHTML = elParr.innerHTML.toUpperCase()
    }

let cambiarBoton3 = document.getElementById('boton3')

cambiarBoton3.onclick = function (){
    elTitulo.innerHTML = elTitulo.innerHTML.toUpperCase()
    elParr.innerHTML = elParr.innerHTML.toUpperCase()
    }
