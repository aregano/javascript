// amigos recibidos del servidor

let amigos = [
    {name: 'Alvaro', email: 'a@a.es' },
    {name: 'Laura', email: 'l@l.es' },
    {name: 'Ricardo', email: 'r@r.es' },
    {name: 'Juan', email: 'j@j.es' },
    {name: 'Petra', email: 'p@p.es' },
];

// Parsear

function parseaAmigos(paramAmigos) {

    let listaUL = document.getElementById('lista')

    for (let index = 0; index < paramAmigos.length; index++) {
    // plantilla general
    // listaUL.innerHTML += '<li>'+amigos[index].name+' '+amigos[index].email+' </li>';
    // plantilla ES6
    listaUL.innerHTML += `<li>
        <span>${amigos[index].name}</span>
        <span>${amigos[index].email}</span>
        <span><button class="saluda" data-value="${amigos[index].email}">Saludar</button></span>
        </li>`
    }
        saludarAmigos('saluda','data-value');
}



// Procesar



// let saludaBtns = document.getElementsByClassName('saluda')

// for (let index = 0; index < saludaBtns.length; index++) {
//     saludaBtns[index].onclick = function () {
//         alert('Mujeres atractivas quieren conocerte, Manda email a: '+this.getAttribute('data-value'));
//     }
// }

function saludarAmigos (classbtn, attri_name) {

    
    let saludaBtns = document.getElementsByClassName(classbtn)

for (let index = 0; index < saludaBtns.length; index++) {
    saludaBtns[index].onclick = function () {
        alert('Mujeres atractivas quieren conocerte, Manda email a: '+this.getAttribute(attri_name));
        }
    }
}

parseaAmigos(amigos)