
function generarHTML(paramElemId, listaAmigos) {
    $(paramElemId).html(function () {
        let htmlAmigos = '';
        listaAmigos.forEach(unAmigo => {
            htmlAmigos += `<li>${unAmigo.name} ${unAmigo.email}</li>
            <button class='saludaBtn' data-value=${unAmigo.name}>${"Hola"}</button>`;
        });
        return htmlAmigos

    })
}

function asociaClick(paramElemId) {
    $(paramElemId + ' .saludaBtn').click(function () {
        alert('Soy ' + $(this).attr('data-value') + ' y NO SOY TU AMIGX');
    })
};


$('#cargarBtnFace').click(function () {
    $.ajax({
        url: "http://www.mocky.io/v2/5bd84b1b3100002714474d48",
        context: document.body
    }).done(function (amigosFromServer) {
        console.log(amigosFromServer);
        //inyectarlos
        generarHTML('#amigosFace', amigosFromServer)

        asociaClick('#amigosFace')
    })
});



$('#cargarBtnSpoty').click(function () {
    $.ajax({
        url: "http://www.mocky.io/v2/5bd84b1b3100002714474d48",
        context: document.body
    }).done(function (amigosFromServer) {
        console.log(amigosFromServer);
        //inyectarlos

        generarHTML('#amigosSpoty', amigosFromServer)

        asociaClick('#amigosSpoty')

    })
});



// $('#amigosFace .saluda').click(function () {
//     alert('Soy ' + $(this).attr('data-value') + ' y NO SOY TU AMIGX');
// })
