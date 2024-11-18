//CLASES

class Persona{
    //Propiedades
    nombre: string

    //Constructor 
    constructor(nombre:string){
        this.nombre = nombre
    }

    //Metodos
    saludar(){ 
        console.log("Hola, mi nomber es "+this.nombre)
    }
}

