// Objetos






let alvaro = {
    nombre: 'Alvaro',
    apellido: 'Regaño',
    edad: 23,
    gustanVideojuegos: true,
    juegoVideojuegos: true,
};

// function (){
//     return "Hola, me llamo "+this.nombre+", tengo "+
//     this.edad+" años y me gustan "+this.gustanVideojuegos;};

// console.log(alvaro.saludar())

let ana = {
    nombre: 'Ana',
    apellido: 'Gutierrez',
    edad: 29,
    gustanVideojuegos: true,
    juegoVideojuegos: false,
    
};


let ricardo = {
    nombre: 'Patriarca',
    apellido: 'Ricardo',
    edad: 41,
    gustanVideojuegos: true,
    juegoVideojuegos: true,
};

let array = [alvaro, ana, ricardo]

let clase = [
    {id: 1, nombre: 'Pepe', edad: 34, 
    showInfo: function(){return '['+this.id+'] '+this.nombre+', '+this.edad}},
    {id: 2, nombre: 'Giorgo', edad: 3, 
    showInfo: function(){return '['+this.id+'] '+this.nombre+', '+this.edad}},
    {id: 4, nombre: 'Pepa', edad: 22, 
    showInfo: function(){return '['+this.id+'] '+this.nombre+', '+this.edad}}
];

console.log(clase)

for (let index = 0; index < clase.length; index++) {
    console.log(clase[index].showInfo())
}

// class
// ES5

let Persona = function(id, nom, ed){
    this.id = id;
    this.nombre = nom;
    this.edad = ed;

    this.showInfo= function(){
        return '['+this.id+'] '+this.nombre+', '+this.edad;
    }

}

    
    
let clase2 = [
    new Persona(1, 'Ricardo', 41),
    new Persona(2, 'Rica', 4),
    new Persona(3, 'Ricard', 1), 
];

for (let index = 0; index < clase2.length; index++) {
    // console.log( clase2[index].showInfo() );  
}

// ES6

class Persona2{
    constructor(id, nom, ed){
        this.id = id;
        this.nombre = nom;
        this.edad = ed;}

        showInfo() {
            return '['+this.id+'] '+this.nombre+', '+this.edad;}

}

let clase3 = [
    new Persona(1, 'Ricardo', 41),
    new Persona(2, 'Rica', 4),
    new Persona(3, 'Ricard', 1), 
];

for (let index = 0; index < clase3.length; index++) {
    console.log( clase3[index].showInfo() );
}

