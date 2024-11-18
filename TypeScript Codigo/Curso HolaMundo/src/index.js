"use strict";
//Tipos de variables
let extinsionDinosaurios = 76000000;
let dinosaurioFavorito = "T-Rex";
let extintos = true;
function dinosaurio(config) {
    return config;
}
//Arrays
let animales = ["perro", "gato", "vaca"];
let nums = [1, 2, 3];
let nums2 = [];
nums.push(4);
nums.forEach(function (value) {
    console.log(value);
});
//Tuplas
let tuplas = [1, "uno"];
let tupla = [1, ["uno", "dos"]];
//Enums
const chica = "s";
const mediana = "m";
const grande = "l";
const extragrande = "xl";
var Talla;
(function (Talla) {
    Talla["Chica"] = "s";
    Talla["Mediana"] = "m";
    Talla["Grande"] = "l";
    Talla["ExtraGrande"] = "xl";
})(Talla || (Talla = {}));
const variable1 = Talla.Grande;
console.log(variable1);
const estado = 2 /* LoadingState.Success */;
//Objetos (Literales)
const objeto = { id: 1,
    nombre: "",
    talla: Talla.Mediana
};
objeto.nombre = "Jhan";
const objeto2 = {
    cedula: 1,
    nombre: "Camilo",
    casado: true,
    direccion: {
        direccion: "UFPS",
    }
};
const arreglo = []; //Arreglo de Objeto Personma
