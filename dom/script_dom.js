document.getElementById('titulo').innerHTML ='Fake news';

document.getElementById('PatReal').innerHTML = 'El Patriarcado es mas antiguo que el Universo. De hecho, el Big Bang se dio en base a la revolucion feminista de las particulas subatomicas que sentian que la sociedad solo tenia en cuenta a protones, ignorando a los cruciales electrones y a los neurtrones, que estaban ahi aguantando los tios'

let elTitulo = document.getElementById('titulo')

let elParr = document.getElementById('PatReal')

let cambiarBoton = document.getElementById('boton')

cambiarBoton.onclick = function (){
    elTitulo.innerHTML = elTitulo.innerHTML.toLowerCase()
    elParr.innerHTML = elParr.innerHTML.toLowerCase()
    }

    // elTitulo.innerHTML = 'Pradva';
    // elParr.innerHTML = 'Tu manera de escribir me da cancer';
    // elParr.style.color = 'red';
    // }

let cambiarBoton2 = document.getElementById('boton2')

cambiarBoton2.onclick = function (){
    elTitulo.innerHTML = elTitulo.innerHTML.toUpperCase()
    elParr.innerHTML = elParr.innerHTML.toUpperCase()
    }

let cambiarBoton3 = document.getElementById('boton3')


    document.getElementById("boton3").onclick = function () {
        var parraf = document.getElementById("PatReal").innerHTML;
        let palabrasTransf = [];
        separat = parraf.split(" ");
     
        for (let index = 0; index < separat.length; index++) {
     
            palabrasTransf[index] = separat[index].toLowerCase().replace(separat[index].toLowerCase().charAt(0), separat[index].charAt(0).toUpperCase());
     
        }
        var palabrasTransfJunto = palabrasTransf.join(" ");
        // console.log(palabrasTransfJunto);
     
        document.getElementById("PatReal").innerHTML = palabrasTransfJunto;
     }
    
