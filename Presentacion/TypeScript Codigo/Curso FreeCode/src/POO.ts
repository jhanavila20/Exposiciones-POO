//Clases Objetos
class Pelicula{
    //Propiedades
    nombre: string
    protagonistas?: string[]

    //Constructor
    constructor(nombre:string, protagonistas?:string[]){
        this.nombre = nombre,
        this.protagonistas = protagonistas
    }

    //Metodos
    proyectarPelicula():void{
        console.log(`${this.nombre} se esta proyectando`)
    }
}

let titanic = new Pelicula("titanic")
let vengadores = new Pelicula("End Game", ["Spiderman", "Ant Man"])

titanic.proyectarPelicula()
console.log(vengadores)


//Encapsulamiento y Genericos
class Sorteo<T>{
    private numero?: T;

    constructor(private nombre:string){}

    getNumero(){
        return this.numero
    }
    
    setNumero(numero:T):void{
        this.numero = numero
    }

    public sortear():string{
        return "para "+this.nombre+" el ticket es " + this.numero
    }
}

let sorteo = new Sorteo<number>("Franco")
sorteo.setNumero(4)
console.log(sorteo.sortear())

let sorteo2 = new Sorteo<string>("Maria")
sorteo2.setNumero("A5")
console.log(sorteo2.sortear())