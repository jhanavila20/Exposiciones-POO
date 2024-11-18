//Tipos de variables
let extinsionDinosaurios: number = 76_000_000
let dinosaurioFavorito: string = "T-Rex"
let extintos: boolean = true


function dinosaurio(config: string): string{
    return config
}

//Arrays
let animales: string[] = ["perro","gato","vaca"]
let nums: number[] = [1,2,3]
let nums2: Array<number> = []

nums.push(4)
nums.forEach(function(value){
    console.log(value)
})

//Tuplas
let tuplas: [number, string] = [1, "uno"]
let tupla: [number, string[]] = [1, ["uno", "dos"]]

//Enums
const chica = "s"
const mediana = "m"
const grande = "l"
const extragrande = "xl"

enum Talla {Chica = "s", Mediana = "m", Grande = "l", ExtraGrande = "xl"}

const variable1 = Talla.Grande
console.log(variable1)

const enum LoadingState {Idle, Loading, Success, Error}
const estado = LoadingState.Success


//Objetos (Literales)
const objeto:{
    readonly id:number,
    nombre:string,
    talla: Talla
} = {id:1,
    nombre:"",
    talla:Talla.Mediana
}

objeto.nombre = "Jhan"

type Direccion ={
    direccion:string,
    casa?:number
}

type Persona = {
    readonly cedula:number,
    nombre:string,
    casado:boolean,
    direccion:Direccion
}

const objeto2:Persona = {
    cedula:1,
    nombre:"Camilo",
    casado:true,
    direccion:{
        direccion:"UFPS",
    }
}

const arreglo: Persona[] = [] //Arreglo de Objeto Personma