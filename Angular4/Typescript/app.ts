class Naveespacial{

    constructor (public propulsor: string){}
    
    pularParaHiperespaco(){
        console.log(`pulando pro hiperespaco com ${this.propulsor}`)
    }

}

let fuscaoPreto = new Naveespacial('motor de fusca');
fuscaoPreto.pularParaHiperespaco()

class Golquadrado extends Naveespacial implements PortaMala{

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

interface PortaMala{
    capacidadePortaMala: number
}

let golBranco = new Golquadrado();
golBranco.pularParaHiperespaco();

let bomDeCarga = (ship: PortaMala) => ship.capacidadePortaMala > 2

console.log(`gol branco é bom pra levar muamba? ${bomDeCarga(golBranco) ? 'sim' : 'nao'} `)