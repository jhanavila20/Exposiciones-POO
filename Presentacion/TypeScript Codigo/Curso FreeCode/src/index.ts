//Datos Primitivos
let estudianteJS: boolean = true;

if(estudianteJS){
    console.log("Si eres estudiante")
}
else{
    console.log("No eres estudiante")
}

let cucutaGoles:number | null = 2
let colombiaGoles:number = 3

function jugar(equipo1: number, equipo2: number):void{
    if(equipo1>equipo2){console.log("Gano el equipo 1")}
    else if(equipo1==equipo2){console.log("Empate")}
    else{console.log("Gano el equipo 2")}
}

jugar(cucutaGoles, colombiaGoles)

//Areglos
let arreglo: string[] = ["Ho","la"]
arreglo.indexOf("Ho")


//Objetos
type Programador = {
    nombre: string,
    tecnologias: (string | number)[],
    trabajando:boolean
}

let programador1: Programador = {
    nombre: "Juan",
    tecnologias: ["java", "python", 2],
    trabajando: false
}

let programador2: Programador = {
    nombre: "Pedro",
    tecnologias: ["java", "python", 2],
    trabajando: true
}

//Interfaces

interface PROGRAMADOR{
    nombre:string,
}


