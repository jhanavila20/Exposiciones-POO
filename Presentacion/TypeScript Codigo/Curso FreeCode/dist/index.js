"use strict";
let estudianteJS = true;
if (estudianteJS) {
    console.log("Si eres estudiante");
}
else {
    console.log("No eres estudiante");
}
let cucutaGoles = 2;
let colombiaGoles = 3;
function jugar(equipo1, equipo2) {
    if (equipo1 > equipo2) {
        console.log("Gano el equipo 1");
    }
    else if (equipo1 == equipo2) {
        console.log("Empate");
    }
    else {
        console.log("Gano el equipo 2");
    }
}
jugar(cucutaGoles, colombiaGoles);
let arreglo = ["Ho", "la"];
arreglo.indexOf("Ho");
let programador1 = {
    nombre: "Juan",
    tecnologias: ["java", "python", 2],
    trabajando: false
};
let programador2 = {
    nombre: "Pedro",
    tecnologias: ["java", "python", 2],
    trabajando: true
};
//# sourceMappingURL=index.js.map