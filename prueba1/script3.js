var mis_numeros_hex = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

console.log(mis_numeros_hex)

mis_numeros_hex[3]=45;
mis_numeros_hex[15]='XX';

console.log(mis_numeros_hex)

for (let i = 0; i < mis_numeros_hex.length; i = i++){
    console.log('El valor en el indice',i,'es',mis_numeros_hex[i-1]);  

}

console.log(mis_numeros_hex[3])