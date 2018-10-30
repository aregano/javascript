console.log($('#holabtn').html());

// $: Idempotente

// $('#holabtn').click(function () {
//     alert("No soy yo, es la fiebre");
// })

$('h1').html('JQuery').click(function () {
    alert('Este es el JQuery');
}).html('Otro titulo')


let amigos = [
    { name: 'Alvaro', email: 'a@a.es' },
    { name: 'Laura', email: 'l@l.es' },
    { name: 'Ricardo', email: 'r@r.es' },
    { name: 'Juan', email: 'j@j.es' },
    { name: 'Petra', email: 'p@p.es' },
];

// $('#amigos').html(function () {
//     let htmlAmigos = '';
//     amigos.forEach(unAmigo => {
//         htmlAmigos += `<li>${unAmigo.name} ${unAmigo.email}</li>
//         <button class='saluda' data-value=${unAmigo.name}>${"Hola"}</button>`;
//     });
//     return htmlAmigos
// })

// $('.saluda').click(function () {
//     alert('Soy ' + $(this).attr('data-value') + ' y NO SOY TU AMIGX');
// })

$('#amigos').html(function () {
    let htmlAmigos = '';
    amigos.forEach(unAmigo => {
        htmlAmigos += `<li>${unAmigo.name} ${unAmigo.email}</li>
        <button class='saluda' data-value=${unAmigo.name}>${"Hola"}</button>`;
    });
    return htmlAmigos
}).children().click(function(){
    alert('Soy ' + $(this).attr('data-value') + ' y NO SOY TU AMIGX');
})

$('#holabtn'). click(function (){
    $('#amigos').toggle();
})