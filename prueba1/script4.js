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

// operarNumeros(4,2,'+');
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



 

// function operarNumArray(arr, op){
//     if(op=='+'){resultado = arr[0];  
        
//         // {resultado +=  arr[index]}
//     }
//     else if(op=='-'){resultado = arr && arr[0]?arr[0]:0; 
//         //  {resultado = resultado - arr[index]}
//          {resultado -= arr[index]}
//         }
//     else if(op=='*'){resultado = 1; 
//         //  {resultado = resultado * arr[index]}
//          {resultado *= arr[index]}
//         }
//     else if(op=='/'){resultado = arr && arr[0]?arr[0]:0;  
//         {if (arr[index] == 0) {resultado = 0;}
//         //  {resultado = resultado / arr[index]}
//         else {resultado /= arr[index]}
//         }
//     }
//     for (let index = 0; index < arr.length; index++)
//         {resultado =  operarNumeros(resultado, arr[index], op)
        
//         }
        

    
    
//     return resultado;
// }

function opNumArr(arr, op) {
    let resultado;
    let idx_inicio=0
 
    if (op == '+'){
          resultado = 0;
        }
    else if (op == '-'){
          resultado = (arr && arr[0])?arr[0]:0; idx_inicio= 1;
        }
    else if (op == '*'){
         resultado = 1;
        }
    else if (op == '/'){
         resultado = (arr && arr[0])?arr[0]:0; idx_inicio = 1;
        }
 
    for (let i = idx_inicio; i < arr.length; i++) {
        // otra manera de solucionar el problema usando el for en vez del if
        // if((op == '-' || op == '/') && i == 0) resultado = arr[0];
        resultado = operarNumeros(resultado , arr[i],op);
    }
 
    return resultado;
 }

console.log(opNumArr([2,1,1,1], '*'));


// console.log(operarNumArr([1,1,1,1,2], '+'));
// console.log(operarNumArr([1,1,1,1,2], '-'));
// console.log(operarNumArr([1,1,1,1,2], '*'));
// console.log(operarNumArr([1,1,1,1,2], '/'));



