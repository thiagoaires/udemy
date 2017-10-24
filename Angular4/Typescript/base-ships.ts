class NaveEspacial{

    constructor (public propulsor: string){}
    
    pularParaHiperespaco(){
        console.log(`pulando pro hiperespaco com ${this.propulsor}`)
    }

}
interface PortaMala{
    capacidadePortaMala: number
}

export{NaveEspacial, PortaMala}