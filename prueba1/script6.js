// recursividad

function una_func(param){
    return resultado;
}

function una_func(param){
    if(param==0) return 0;
    return una_func(param-1);
}

function factorial (N){
    if (N==0) return 1; 
    else return N*factorial(N-1)
}

console.log(factorial(4));