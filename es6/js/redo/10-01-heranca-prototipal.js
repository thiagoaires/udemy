// class

//obs: classe no js eh prototipada
function Animal(kind, sound){
    // constructor
    this.kind = kind;
    this.sound = sound;
};

//method
Animal.prototype.hello = function(){
    console.log(`${this.sound}, i'm a ${this.kind}`);
};

const dog = new Animal('dog', 'RAAWHUWWUWAAAW');
const cat = new Animal('cat', 'miau');