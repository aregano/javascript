var mascotas = []


// (usar funcion for)

// for (let index = 0; index < 1000; index = index + 1) {
//     mascotas [index]= "Perro sarnoso " + [index + 1]
// }


// for (let index = 0; index < 1000; index = index + 2){
//     if(index == 0){console.log(mascotas [index], 'no tiene hermanos')}
//     else {console.log(mascotas[index] , 'es hermano de', mascotas[index - 1])}
//     }

let i = 0
// (usar funcion while)
// while(i<1000){if(i == 0){console.log(mascotas[i]='Perro', [i+1], 'no tiene hermanos'); i++}
//     else{console.log(mascotas[i]= 'Perro',[i+1], 'es hermano de Perro', [i]); i++;}
    
// }

// Usar function para concatenar nombres y apellidos

// var u1_name = 'Alvaro'
// var u1_surname = 'Regaño'

// function generarNombreCompleto(unNombre, unApellido){
//     let nombre_mod ='*'+unNombre+'*';
//     let app_mode ='//'+unApellido+'//';
//     return nombre_mod+' '+app_mode;
        
// }

// console.log( generarNombreCompleto(u1_name, u1_surname))

var numero1 = []

var numero2 = []

var op = ['+','-','*','/']

var arr = []

function operarNumeros(numero1, numero2, op){
    if(op=='+'){return numero1+numero2;}
    else if(op=='-'){return numero1-numero2;}
    else if(op=='*'){return numero1*numero2;}
    else if(op=='/'){
        if(numero2==0){return '0';} else{return numero1/numero2;};}
    
}

operarNumeros(4,2,'+');
// console.log( operarNumeros(4,2,'-'))
// console.log( operarNumeros(4,2,'*'))
// console.log( operarNumeros(4,2,'/'))



// como hacer operaciones con un array

var resultado = 0

var arr = []

// function operarNumArray(arr, op){
//     if(op=='+'){resultado = arr[0]; for (let index = 1; index < arr.length; index++) 
//         // {resultado = resultado + arr[index]}
//         {resultado += arr[index]}
//     }
//     else if(op=='-'){resultado = arr[0]; for (let index = 1; index < arr.length; index++)
//         //  {resultado = resultado - arr[index]}
//          {resultado -= arr[index]}
//         }
//     else if(op=='*'){resultado = arr[0]; for (let index = 1; index < arr.length; index++)
//         //  {resultado = resultado * arr[index]}
//          {resultado *= arr[index]}
//         }
//     else if(op=='/'){resultado = arr[0]; for (let index = 1; index < arr.length; index++) 
//         {if (arr[index] == 0) {resultado = 0;}
//         //  {resultado = resultado / arr[index]}
//         else {resultado /= arr[index]}
//         }
//     }
    
//     return resultado;
// }

// console.log(operarNumArray([1,1,1,1,2], '+'));
// console.log(operarNumArray([1,1,1,1,2], '-'));
// console.log(operarNumArray([1,1,1,1,2], '*'));
// console.log(operarNumArray([1,1,1,1,2], '/'));


 

// function operarNumArray(arr, op){
//     if(op=='+'){resultado = arr[0]; for (let index = 1; index < arr.length; index++) 
//         {resultado =  operarNumeros(resultado, arr[index], '+')}
//         // {resultado +=  arr[index]}
//     }
//     else if(op=='-'){resultado = arr[0]; for (let index = 1; index < arr.length; index++)
//         //  {resultado = resultado - arr[index]}
//          {resultado -= arr[index]}
//         }
//     else if(op=='*'){resultado = arr[0]; for (let index = 1; index < arr.length; index++)
//         //  {resultado = resultado * arr[index]}
//          {resultado *= arr[index]}
//         }
//     else if(op=='/'){resultado = arr[0]; for (let index = 1; index < arr.length; index++) 
//         {if (arr[index] == 0) {resultado = 0;}
//         //  {resultado = resultado / arr[index]}
//         else {resultado /= arr[index]}
//         }
//     }
    
//     return resultado;
// }

// console.log(operarNumArray([1,1,1,1], '+'));

