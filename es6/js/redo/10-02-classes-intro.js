class Animal{

    constructor(kind, sound){
        this.kind = kind
        this.sound = sound
    }

    hello(){
        console.log(`${this.sound}, i'm a ${this.kind}`);
    }

    static info(){
        console.log('this is a class to create animals');
    }

    get name() {
        console.log(`${this.sound} my name is Max`);
    }
    set nickname(nick){
        this.nick = nick;
    }
};

const dog = new Animal('dog', 'RAAWHUWWUWAAAW');
const cat = new Animal('cat', 'miau');