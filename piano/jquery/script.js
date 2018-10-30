$.ajax({
    url: 'http://www.mocky.io/v2/5bd88ad9310000bb3c474f1a',
    context: document.body
}).done(function (notas) {
    console.log(notas);
    generateStructure(notas,'piano')

});



function generateStructure(arrNotes, divN) {
    let finalHtml = '';

    // funcion callback (=>)

    arrNotes.forEach(element => {
        finalHtml += element.tono ? `<div class="note" data-snd="${element.sonido}"></div>` : `<div class="note semi" data-snd="${element.sonido}"></div>`;
    });

    document.getElementById(divN).innerHTML = finalHtml;
    associateAndPlayNotes();
}

function associateAndPlayNotes() {
    let player = document.getElementById('player');

    document.querySelectorAll('.note').forEach(element => {
        element.onclick = function () {
            player.src = this.getAttribute('data-snd');
            player.play();
        }
    });

}
