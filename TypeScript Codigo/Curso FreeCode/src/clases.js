"use strict";
//CLASES
class Persona {
    //Constructor 
    constructor(nombre) {
        this.nombre = nombre;
    }
    //Metodos
    saludar() {
        console.log("Hola, mi nomber es " + this.nombre);
    }
}
