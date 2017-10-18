class Spacecraft{
    // propulsor: string

    // constructor(propulsor: string){
    //     this.propulsor = propulsor
    // }
    constructor(public propulsor:string){}

    jumpIntoHyperspace(){
        console.log(`entering hyperspace with ${this.propulsor}`)
    }

}

interface Containership{
    cargoContainers: number
}

class MilleniumFalcon extends Spacecraft implements Containership{

    cargoContainers: number

    constructor(){
        super('hyperdrive')
        this.cargoContainers = 4
    }

    jumpIntoHyperspace(){
        if(Math.random() >= .5){
            super.jumpIntoHyperspace()
        }else{
            console.log(`fail`)
        }
    }
}

function goodForTheJob(ship: Containership): boolean{
    return ship.cargoContainers > 2
}

let mf = new MilleniumFalcon()
mf.jumpIntoHyperspace()
console.log(goodForTheJob(mf))

let falcon = new Spacecraft('nos')
falcon.jumpIntoHyperspace()

let message: string = 'u are the hope kenobio'

console.log(message)

let episode: number = 4
episode = episode + 1
console.log(`next episodio is ${episode}`)

let favoriteDroid: string
favoriteDroid = 'bb-8'

console.log(`mey droid favorito eh o ${favoriteDroid}`)

let isEnoughToBeatMF = function (parsecs: number): boolean {
    return parsecs < 12
}

let distance: number = 11;

console.log(`a distancia ${distance} eh suficiente pra bater a MF? r: ${isEnoughToBeatMF(distance) ? 'YES' : 'NO'}`)

let call = (name: string) => console.log(`kaway desu NANII ${name}`)

call('r2')



function inc (speed: number, inc: number = 1):number {
    return speed + inc
}

console.log(`${inc(4, 1)}`)

console.log(`${inc(3)}`)