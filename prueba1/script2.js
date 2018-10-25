var meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio", "Julio","Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

var lista = 0

var esta_cachas = true;

var peso = 9000;

var altura = 170;

if(peso <= altura -100 - 20){esta_cachas=false; console.log("come mas")}else if(peso <= altura-100){console.log('Que cachas estas')}
else{console.log('Ponte a hacer ejercicio. Te sobran:', peso-(altura-100), 'kg')}

console.log(meses[0],meses[6],meses[10],meses[11])

var num1 = -10

var num2 = -8

var num3 = -7

if(num1 >= num2){if(num1 >= num3){console.log(num1);} else{console.log(num3)})
else if(num2 >= num3){if(num2 >= num1){console.log(num2);} else{console.log(num1);}
else{console.log(num3)}

if(num1 >= num2 && num1 >= num3){console.log(num1)}
else if(num2 >= num1 && num2 >= num3){console.log(num2)}
else{console.log(num3)}