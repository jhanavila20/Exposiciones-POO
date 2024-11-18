"use strict";
//Clases Objetos
class Pelicula {
    //Constructor
    constructor(nombre, protagonistas) {
        this.nombre = nombre,
            this.protagonistas = protagonistas;
    }
    //Metodos
    proyectarPelicula() {
        console.log(`${this.nombre} se esta proyectando`);
    }
}
let titanic = new Pelicula("titanic");
let vengadores = new Pelicula("End Game", ["Spiderman", "Ant Man"]);
titanic.proyectarPelicula();
console.log(vengadores);
//Encapsulamiento y Genericos
class Sorteo {
    constructor(nombre) {
        this.nombre = nombre;
    }
    getNumero() {
        return this.numero;
    }
    setNumero(numero) {
        this.numero = numero;
    }
    sortear() {
        return "para " + this.nombre + " el ticket es " + this.numero;
    }
}
let sorteo = new Sorteo("Franco");
sorteo.setNumero(4);
console.log(sorteo.sortear());
let sorteo2 = new Sorteo("Maria");
sorteo2.setNumero("A5");
console.log(sorteo2.sortear());
