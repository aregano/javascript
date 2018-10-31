
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

document.getElementById('add').onclick = (function (event){
    // console.log(event);
    event.preventDefault();
    let formValid = document.getElementById('addForm').checkValidity();
    let newAmigo = {
        nombre: document.getElementById('username').value,
        email: document.getElementById('email').value };
    let htmlOriginal = document.getElementById('amigosFace').innerHTML;

    if(formValid){
        $.ajax({
            method: "POST",
            url: "http://www.mocky.io/v2/5bd978b52f00006b0006d15c",          
            data: newAmigo
        }).done(function(data){
            console.log(data);
            
            if(data.result) {
                addAmigoHtml('#amigosFace', newAmigo);

            //     htmlOriginal += `<li>${newAmigo.username} ${newAmigo.email}</li>`+
            //     `<button class="saludaBtn" data-value="${newAmigo.username}">Hola</button>`;
            }
            else {
                document.getElementById('error').classList.remove('esconder')
            }
            return htmlOriginal});
    }
})

function addAmigoHtml(paramElemid, unAmigo) {
    let htmlAmigos = `<li>
    <div>${unAmigo.username}</div>
    <div>${unAmigo.email}</div>        
    <div><button class="saludaBtn" data-value="${unAmigo.username}">Saludar</button></div>        
    </li>`;


    $(paramElemid).append(htmlAmigos);
    asociaClick('#amigosFace .saludaBtn');

}

// $('#amigosFace .saluda').click(function () {
//     alert('Soy ' + $(this).attr('data-value') + ' y NO SOY TU AMIGX');
// })
