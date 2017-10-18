class Naveespacial{

    constructor (public propulsor: string){}
    
    pularParaHiperespaco(){
        console.log(`pulando pro hiperespaco com ${this.propulsor}`)
    }

}

let nave = new Naveespacial('motor de fusca');
nave.pularParaHiperespaco()

class Golquadrado extends Naveespacial{
    constructor(){
        super('motorAP')
    }

    pularParaHiperespaco(){
        if (Math.random() >= .5){
            super.pularParaHiperespaco()
        } else {
            console.log(`sem gasolina pra abastecer ${this.propulsor}`)
        }
    }
}

let golBranco = new Golquadrado();
golBranco.pularParaHiperespaco();

interface Picape{
    capacidadePortaMala: number
}