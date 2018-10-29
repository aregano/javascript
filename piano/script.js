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

function generate Structure(arrNotes,divN) {
    let finalHTML = '';

    arrNotes.forEach(element => {
        finalHTML += element.tono
    });
}



function parseaNotas(paramNotas){

    let piano = document.getElementById('piano')

    for (let index = 0; index < paramNotas.length; index++) {
        piano.innerHTML += 
        `<div class="${notas[index].tono}" id="${notas[index].nombre}">
        <audio src="${notas[index].sonido}"></audio></div>`
    }
}

parseaNotas(notas)

for (let index = 0; index < notas.length; index++) {
    notas[index].onclick = function () {
        player.src = this.getAttribute('src');
        player.play();
        audio.play();
        
    }
    
}




// function generateStructure(arrNotes, divN) {
//     let finalHtml = '';
 
//     arrNotes.forEach(element => {
//         finalHtml += element.tono ? `<div class="note" data-snd="${element.sonido}"></div>` : `<div class="note semi" data-snd="${element.sonido}"></div>`;
//     });
 
//     document.getElementById(divN).innerHTML = finalHtml;
//     associateAndPlayNotes();
//  }
 
//  function associateAndPlayNotes() {
//     let player = document.getElementById('player');
 
//     document.querySelectorAll('.note').forEach(element => {
//         element.onclick = function () {
//             player.src = this.getAttribute('data-snd');
//             player.play();
//         }
//     });
 
//  }
 
//  generateStructure(notas, 'piano');