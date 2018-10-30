let notas = [
    { nombre: "C", sonido: './wav/c1.wav', tono: true },
    { nombre: "C#", sonido: './wav/c1s.wav', tono: false },
    { nombre: "D", sonido: './wav/d1.wav', tono: true },
    { nombre: "D#", sonido: './wav/d1s.wav', tono: false },
    { nombre: "E", sonido: './wav/e1.wav', tono: true },
    { nombre: "F", sonido: './wav/f1.wav', tono: true },
    { nombre: "F#", sonido: './wav/f1s.wav', tono: false },
    { nombre: "G", sonido: './wav/g1.wav', tono: true },
    { nombre: "G#", sonido: './wav/g1s.wav', tono: false },
    { nombre: "A", sonido: './wav/a1.wav', tono: true },
    { nombre: "A#", sonido: './wav/a1s.wav', tono: false },
    { nombre: "B", sonido: './wav/b1.wav', tono: true },
    { nombre: "C2", sonido: './wav/c2.wav', tono: true }

]



function parseaNotas(paramNotas) {

    let piano = document.getElementById('piano')

    let finalHTML = ''

    for (let index = 0; index < paramNotas.length; index++) {
        piano.innerHTML += `
            <div data-audio="a${index}" class="nota ${notas[index].tono}" id="${notas[index].nombre}">
            <audio id="a${index}" src="${notas[index].sonido}"></audio></div>
        `;
    }
}

parseaNotas(notas);



function tocarNota() {

    let tocarNota = document.getElementsByClassName('nota');

    for (let index = 0; index < tocarNota.length; index++) {

        tocarNota[index].onclick = function() {
            let idAudio=  this.getAttribute('data-audio');
            document.getElementById(idAudio).play();

        };

    };
}

tocarNota();




