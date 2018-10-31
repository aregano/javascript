document.getElementById('accederBtn').onclick = (function (event){
    // console.log(event);
    event.preventDefault();
    let formValid = document.getElementById('loginForm').checkValidity();

    if(formValid){
        $.ajax({
            method: "POST",
            url: "http://www.mocky.io/v2/5bd977d92f0000570006d15a",
            // result : true . http://www.mocky.io/v2/5bd978b52f00006b0006d15c
            // result: false . http://www.mocky.io/v2/5bd977d92f0000570006d15a

            data: {
                username: document.getElementById('username').value, 
                password: document.getElementById('password').value 
            }
        }).done(function(data){
            console.log(data)
            if(data.result) {
                window.location.href='dashboard.html'
            }
            else {
                document.getElementById('mensaje').classList.remove('esconder')
            }
        });

// ENVIAR


    }else {
    
// mostrar mensaje y no enviar
    // document.querySelectorAll('.error').forEach(elem =>{
    //     elem.innerHTML='';    

    document.querySelectorAll('.error').forEach(elem =>{
        elem.classList.add('esconder');  

    });

    // document.getElementById('mensaje').innerHTML = "Datos Incorrectos";
    if(!document.getElementById('username').checkValidity()){
    document.getElementById('errorUsername').classList.remove ('esconder');
}

    if(!document.getElementById('password').checkValidity()){
        document.getElementById('errorPassword').classList.remove ('esconder')};
}
// NO ENVIAR Y DECIR ERROR

});