class Animal{

    constructor(name){
        this.name = name;
    }

    hello(){
        console.log(`my name is ${this.name}`)
    }

}

const elephant = new Animal('Dimbo');