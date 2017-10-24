import{NaveEspacial, PortaMala} from './base-ships'

export class Golquadrado extends NaveEspacial implements PortaMala{

    capacidadePortaMala: number

    constructor(){
        super('motorAP')
        this.capacidadePortaMala = 1
    }

    pularParaHiperespaco(){
        if (Math.random() >= .1){
            super.pularParaHiperespaco()
        } else {
            console.log(`sem gasolina pra abastecer ${this.propulsor}`)
        }
    }
}